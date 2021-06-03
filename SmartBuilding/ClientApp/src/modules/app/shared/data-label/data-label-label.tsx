import styled from '@emotion/styled';

const DataLabelLabel = styled.div`
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

export { DataLabelLabel };
