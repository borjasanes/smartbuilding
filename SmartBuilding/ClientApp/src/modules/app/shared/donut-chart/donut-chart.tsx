import React, { useMemo } from 'react';
import * as d3 from 'd3';
import styled from '@emotion/styled';
import {
    colorsGraphWithBorder,
    getBorderGraphColor
} from 'styles/theme/color-graphs';
import { useTheme } from '@emotion/react';
import { rem } from 'styles/utils/sizes';
import { GridTemplate } from '..';
import { Arc } from './arc';

export type DonutChartItem = {
    percentage: number;
    color: string;
    title: string;
};

type DonutChartProps = {
    items: DonutChartItem[];
    itemCircleWidth: number;
    size: number;
    showLegend?: boolean;
    showTotal?: boolean;
    total?: number;
};

const DonutChartContainer = styled.div`
    ${({
        theme: {
            base: {
                colors,
                fonts: { getHeadlinesConfig }
            }
        }
    }) => `
        align-items: center;
        display: flex;
        flex-direction: column;

        svg {
            text {
                dominant-baseline: middle;
                fill: ${colors.neutral.dark};
                ${getHeadlinesConfig('M')};
                text-anchor: middle;
            }
        }
    `}
`;

const LegendContainer = styled.div`
    margin-top: ${rem(10)};
`;

const Legend = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const LegendColor = styled.div<{ color: string }>`
    ${({
        theme: {
            base: { colors }
        },
        color
    }) => `
        background-color: ${color};
        border-radius: 50%;
        border: 1px solid ${getBorderGraphColor(color, colors.graphs.border)};
        height: ${rem(8)};
        width: ${rem(8)};
    `}
`;

const LegendText = styled.div`
    ${({
        theme: {
            base: {
                fonts: { getTextsConfig, boldFont }
            }
        }
    }) => `
        ${getTextsConfig('XS')};
        font-family: ${boldFont};
        padding: 0 ${rem(5)};
    `}
`;

const DonutChart: React.FC<DonutChartProps> = ({
    items,
    size,
    itemCircleWidth,
    showLegend = true,
    showTotal = false,
    total
}: DonutChartProps) => {
    const {
        base: {
            colors: { graphs },
            graphs: { emptyGraphRelativeWidthPx: relativeEmptyWidth }
        }
    } = useTheme();
    const radius = size / 2;

    const withBorder = useMemo(
        () => items.some((i) => colorsGraphWithBorder.includes(i.color)),
        [items]
    );
    const borderMargin = withBorder ? 1 : 0;

    const totalPercent = items.reduce(
        (total, nextItem) => total + nextItem.percentage,
        0
    );

    const createPie = d3
        .pie<DonutChartItem>()
        .value((d: DonutChartItem) => d.percentage)
        .startAngle(0)
        .endAngle((2 * Math.PI * totalPercent) / 100)
        .sort(null);
    const createArc = d3
        .arc<d3.PieArcDatum<DonutChartItem>>()
        .innerRadius(radius - itemCircleWidth - borderMargin + 2)
        .cornerRadius(50)
        .outerRadius(radius - borderMargin - 2);
    const createEmptyArc = d3
        .arc<d3.PieArcDatum<DonutChartItem>>()
        .innerRadius(
            radius - itemCircleWidth + relativeEmptyWidth / 2 - borderMargin
        )
        .outerRadius(radius - relativeEmptyWidth / 2 - borderMargin)
        .startAngle(0)
        .endAngle(2 * Math.PI);
    const colors = d3.scaleOrdinal(items?.map((i) => i.color));
    const data = createPie(items);
    const emptyData = createPie([
        {
            percentage: 100,
            color: graphs.empty,
            title: ''
        }
    ]);

    const calculatedTotal = Math.round(total ?? totalPercent);

    return (
        <DonutChartContainer>
            <svg width={size} height={size}>
                <g transform={`translate(${radius} ${radius})`}>
                    <Arc
                        d={createEmptyArc(emptyData[0]) ?? undefined}
                        color={graphs.empty}
                        withBorder={withBorder}
                    />
                    {data?.map((d, i) => (
                        <Arc
                            key={i}
                            data={d}
                            d={createArc(d) ?? undefined}
                            color={colors(i.toString())}
                            withBorder={withBorder}
                        />
                    ))}
                </g>
                {showTotal ? (
                    <text data-testid='progress-text' x={radius} y={radius}>
                        {`${calculatedTotal}%`}
                    </text>
                ) : null}
            </svg>
            {showLegend ? (
                <LegendContainer>
                    <GridTemplate columns={2} align='center'>
                        {items.map(({ color, title, percentage }) => (
                            <Legend title={title} key={title}>
                                <LegendColor color={color} />
                                <LegendText>{`${percentage}%`}</LegendText>
                            </Legend>
                        ))}
                    </GridTemplate>
                </LegendContainer>
            ) : null}
        </DonutChartContainer>
    );
};

export { DonutChart };
