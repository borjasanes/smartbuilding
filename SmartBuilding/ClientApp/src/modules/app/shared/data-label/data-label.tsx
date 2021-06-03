import styled from '@emotion/styled';
import { rem } from 'styles/utils/sizes';
import { DataLabelLabel } from './data-label-label';

export type DataStyle = 'danger' | 'warning';

type DataLabelProps = {
    label: string;
    dataValue: number;
    dataStyle: DataStyle;
};

const DataLabelWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const DataLabelData = styled.div<{ dataStyle: DataStyle }>`
    ${({
        theme: {
            base: {
                colors,
                fonts: { getTextsConfig, boldFont }
            }
        },
        dataStyle
    }) => `
        align-items: center;
        background-color: ${
            dataStyle === 'warning'
                ? colors.secondary.danger
                : colors.secondary.default
        };
        border-radius: 50%;
        color: ${colors.neutral.fullLight};
        display: flex;
        ${getTextsConfig('XL')};
        font-family: ${boldFont};
        height: ${rem(76)};
        justify-content: center;
        margin-bottom: ${rem(4)};
        width: ${rem(76)};
    `}
`;

const DataLabel = ({ label, dataValue, dataStyle }: DataLabelProps) => {
    return (
        <DataLabelWrapper>
            <DataLabelData dataStyle={dataStyle}>{dataValue}</DataLabelData>
            <DataLabelLabel>{label}</DataLabelLabel>
        </DataLabelWrapper>
    );
};

export { DataLabel };
