import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';
import { rem } from 'styles/utils/sizes';
import { Icon, IconWrapper } from '../icon/icon';

export type IconType = 'hvac' | 'temperature' | 'anomalies' | 'environmental';

type CardProps = {
    title: string;
    icon?: IconType;
};

const iconTypeDictionary: { [key: string]: string } = {
    hvac: 'clock',
    temperature: 'temperature',
    anomalies: 'belt',
    environmental: 'environment'
};

const CardWrapper = styled.article`
    ${({
        theme: {
            base: { colors }
        }
    }) => `
        background-color: ${colors.neutral.fullLight};
        border-radius: ${rem(8)};
        display: flex;
        height: ${rem(160)};
        overflow: hidden;
   `}
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${rem(12)} ${rem(12)} ${rem(12)} ${rem(16)};
    width: 100%;
`;

const CardTitle = styled.h2`
    ${({
        theme: {
            base: {
                fonts: { getHeadlinesConfig }
            }
        }
    }) => `
        ${getHeadlinesConfig('M')};
    `}
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    position: relative;
    width: 100%;
`;

const IconContainer = styled.div<{ icon?: IconType }>`
    ${({
        theme: {
            base: { colors }
        },
        icon
    }) => `
        align-items: center;
        display: flex;
        flex: 0 0 auto;
        justify-content: center;
        width: ${rem(96)};

        ${
            icon === 'hvac'
                ? `background-color: ${colors.secondary.light}`
                : icon === 'temperature'
                ? `background-color: ${colors.secondary.dark}`
                : icon === 'anomalies'
                ? `background-color: ${colors.secondary.danger}`
                : icon === 'environmental'
                ? `background-color: ${colors.secondary.success}`
                : `background-color: ${colors.neutral.dark}`
        };
        
        ${IconWrapper} {
            color: ${colors.neutral.fullLight};
            font-size: ${rem(84)};
        }
    `}
`;

const FeaturedCard = ({
    title,
    icon = 'hvac',
    children
}: PropsWithChildren<CardProps>) => {
    return (
        <CardWrapper>
            <IconContainer icon={icon}>
                <Icon iconName={iconTypeDictionary[icon]} />
            </IconContainer>
            <CardContainer>
                <CardTitle>{title}</CardTitle>
                <CardContent>{children}</CardContent>
            </CardContainer>
        </CardWrapper>
    );
};

export { FeaturedCard };
