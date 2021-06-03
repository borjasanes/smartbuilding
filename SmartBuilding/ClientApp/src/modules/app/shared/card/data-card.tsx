import styled from '@emotion/styled';
import { rem } from 'styles/utils/sizes';
import { Icon, IconWrapper } from '../icon/icon';

export type StyleData = 'success' | 'default' | 'danger';

type CardProps = {
    title: string;
    percentage: number;
    data: string;
    isWarning?: boolean;
    styleData?: StyleData;
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
        flex-direction: column;
        height: ${rem(160)};
        overflow: hidden;
   `}
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding: ${rem(12)} ${rem(8)} ${rem(4)};
`;

const CardTitle = styled.h2`
    ${({
        theme: {
            base: {
                fonts: { getTextsConfig }
            }
        }
    }) => `
        ${getTextsConfig('M')};
    `}
`;

const CardContent = styled.div``;

const PercentageWrapper = styled.div<{ isWarning?: boolean }>`
    ${({
        theme: {
            base: {
                colors,
                fonts: { getTextsConfig }
            }
        },
        isWarning
    }) => `
        align-items: center;
        color: ${
            isWarning ? colors.secondary.danger : colors.secondary.success
        };
        display: flex;
        ${getTextsConfig('S')};

        ${IconWrapper} {
            margin-left: ${rem(4)};
            margin-right: ${rem(8)};
        }
    `}
`;

const DataWrapper = styled.div<{ styleData?: StyleData }>`
    ${({
        theme: {
            base: {
                colors,
                fonts: { getTextsConfig, regularFont }
            }
        },
        styleData
    }) => `
        align-items: center;
        background-color: ${
            styleData === 'success'
                ? colors.secondary.success
                : styleData === 'danger'
                ? colors.secondary.danger
                : colors.secondary.default
        };
        box-sizing: border-box;
        color: ${colors.neutral.fullLight};
        display: flex;
        font-family: ${regularFont};
        ${getTextsConfig('XL')};
        height: ${rem(64)};
        margin-top: auto;
        padding: ${rem(8)};
    `}
`;

const DataCard = ({
    title,
    percentage,
    data,
    isWarning,
    styleData
}: CardProps) => {
    return (
        <CardWrapper>
            <CardContainer>
                <CardTitle>{title}</CardTitle>
                <CardContent>
                    <PercentageWrapper isWarning={isWarning}>
                        <Icon
                            iconName={
                                isWarning ? 'arrow-mini-down' : 'arrow-mini-top'
                            }
                            iconSize={6}
                        />
                        {percentage}%
                    </PercentageWrapper>
                </CardContent>
            </CardContainer>
            <DataWrapper styleData={styleData}>{data}</DataWrapper>
        </CardWrapper>
    );
};

export { DataCard };
