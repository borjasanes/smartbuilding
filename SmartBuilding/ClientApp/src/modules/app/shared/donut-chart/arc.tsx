import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { DonutChartItem } from './donut-chart';
import { VirtualElement } from '@popperjs/core';
import { createPortal } from 'react-dom';
import { rem } from 'styles/utils/sizes';
import { useTheme } from '@emotion/react';
import { getBorderGraphColor } from 'styles/theme/color-graphs';
import { usePopper } from 'react-popper';

type ArcProps = {
    data?: d3.PieArcDatum<DonutChartItem>;
    color: string;
    d?: string;
    dEmpty?: string;
    withBorder: boolean;
};

const TooltipWrapper = styled.div`
    ${({
        theme: {
            base: { zindex }
        }
    }) => `
        z-index: ${zindex.above};
    `}
`;

const TooltipContainer = styled.div`
    ${({
        theme: {
            base: { colors, zindex }
        }
    }) => `
        align-items: center;
        background-color: ${colors.neutral.dark};
        border-radius: ${rem(4)};
        display: flex;
        flex-direction: column;
        padding: ${rem(5)} ${rem(10)};
        z-index: ${zindex.super};
    `}
`;

const TooltipTitle = styled.div`
    ${({
        theme: {
            base: {
                colors,
                fonts: { getTextsConfig }
            }
        }
    }) => `
        color: ${colors.neutral.fullLight};
        ${getTextsConfig('S')};
    `}
`;

const TooltipValue = styled.div`
    ${({
        theme: {
            base: {
                colors,
                fonts: { getTextsConfig }
            }
        }
    }) => `
        color: ${colors.secondary.light};
        ${getTextsConfig('XS')};
    `}
`;

const Arc: React.FC<ArcProps> = ({ data, d, color, withBorder }: ArcProps) => {
    const generateGetBoundingClientRect = (
        x: number = 0,
        y: number = 0
    ) => () => ({
        width: 0,
        height: 0,
        top: y,
        right: x,
        bottom: y,
        left: x
    });

    const [showTooltip, setShowTooltip] = useState(false);
    const {
        base: { colors }
    } = useTheme();

    const virtualElement = useRef<VirtualElement>({
        getBoundingClientRect: generateGetBoundingClientRect()
    });
    const tooltipRef = useRef<HTMLDivElement>(null);
    const { styles, attributes, update } = usePopper(
        virtualElement.current,
        tooltipRef.current,
        {
            placement: 'auto',
            strategy: 'fixed',
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 10]
                    }
                }
            ]
        }
    );

    return (
        <>
            <g
                onMouseMove={(ev) => {
                    virtualElement.current.getBoundingClientRect = generateGetBoundingClientRect(
                        ev.clientX,
                        ev.clientY
                    );
                    update?.();
                    setShowTooltip(true);
                }}
                onMouseLeave={() => {
                    setShowTooltip(false);
                }}
            >
                <path
                    d={d}
                    fill={color}
                    stroke={
                        withBorder
                            ? getBorderGraphColor(color, colors.graphs.border)
                            : undefined
                    }
                    strokeWidth={withBorder ? '1px' : undefined}
                />
            </g>

            {data &&
                createPortal(
                    <TooltipWrapper
                        ref={tooltipRef}
                        style={styles.popper}
                        {...attributes.popper}
                    >
                        {showTooltip && data.data.title ? (
                            <TooltipContainer>
                                <TooltipTitle>{data.data.title}</TooltipTitle>
                                <TooltipValue>{`${data.value}%`}</TooltipValue>
                            </TooltipContainer>
                        ) : null}
                    </TooltipWrapper>,
                    document.querySelector('#root')!
                )}
        </>
    );
};

export { Arc };
