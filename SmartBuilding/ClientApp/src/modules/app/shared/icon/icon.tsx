import React, { Ref } from 'react';
import styled from '@emotion/styled';
import icons from 'assets/fonts/smartbuilding-iconsfont.json';

type IIconWrapperProps = {
    iconBaseName: string;
    iconBaseSize: number;
    iconBaseColor: string;
};

const IconWrapper = styled('span')<IIconWrapperProps>`
    ${({ iconBaseName, iconBaseSize, iconBaseColor }) => `
        align-items: center;
        color: ${iconBaseColor};
        display: inline-flex;
        font-family: smartbuilding-iconsfont !important;
        font-size: ${iconBaseSize}px;
        font-style: normal;
        font-variant: normal;
        font-weight: normal !important;
        text-transform: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        &:before {
            content: "${iconBaseName}";
            display: block;
            line-height: initial;
        }
    `}
`;

type IIconProps = {
    iconName: string;
    iconSize?: number;
    iconColor?: string;
    ref?: Ref<HTMLSpanElement>;
};

const Icon: React.FC<IIconProps> = ({
    iconName,
    iconSize = 24,
    iconColor,
    ref
}: IIconProps) => {
    const iconValue = (icons as never)[iconName];

    return (
        <IconWrapper
            iconBaseName={iconValue ? iconValue : (icons as never)['default']}
            iconBaseSize={iconSize}
            iconBaseColor={iconColor ? iconColor : 'unset'}
            ref={ref}
        />
    );
};

export { Icon, IconWrapper };
