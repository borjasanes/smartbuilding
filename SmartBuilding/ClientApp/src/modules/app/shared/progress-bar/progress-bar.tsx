import styled from '@emotion/styled';
import { percentage, rem } from 'styles/utils/sizes';

type ProgressBarProps = {
    label: string;
    dataValue: number;
    dataMax: number;
    dataDanger: number;
    dataType?: 'ºC' | '%';
};

const ProgressBarWrapper = styled.div``;

const ProgressBarData = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${rem(4)};
`;

const ProgressBarLabel = styled.div`
    ${({
        theme: {
            base: {
                colors,
                fonts: { getTextsConfig }
            }
        }
    }) => `
        color: ${colors.neutral.grayDark};
        ${getTextsConfig('S')};
    `}
`;

const ProgressBarItem = styled.div<{
    dataValue: number;
    dataMax: number;
    dataDanger: number;
}>`
    ${({
        theme: {
            base: { colors }
        },
        dataValue,
        dataMax,
        dataDanger
    }) => `
        background-color: ${colors.neutral.gray};
        border-radius: ${rem(8)};
        height: ${rem(12)};
        overflow: hidden;
        position: relative;
        width: 100%;

        &:after {
            animation: widthTransition 3s;
            background-color: ${
                dataValue > dataDanger
                    ? colors.secondary.danger
                    : colors.secondary.success
            };
            border-radius: ${rem(8)};
            content: '';
            display: block;
            height: 100%;
            transform-origin: left;
            width: calc(${percentage((dataValue * 100) / dataMax)});
        }

        @keyframes widthTransition {
            0% {
                transform: scaleX(0);
            }
            100% {
                transform: scaleX(1);
            }
        }
    `}
`;

const ProgressBar = ({
    label,
    dataValue,
    dataMax,
    dataDanger,
    dataType
}: ProgressBarProps) => {
    return (
        <ProgressBarWrapper>
            <ProgressBarData>
                <ProgressBarLabel>{label}</ProgressBarLabel>
                <p>
                    {dataValue}
                    {dataType}
                </p>
            </ProgressBarData>
            <ProgressBarItem
                dataValue={dataValue}
                dataMax={dataMax}
                dataDanger={dataDanger}
            />
        </ProgressBarWrapper>
    );
};

export { ProgressBar };
