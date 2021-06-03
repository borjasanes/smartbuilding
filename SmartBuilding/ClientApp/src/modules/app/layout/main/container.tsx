import styled from '@emotion/styled';
import { rem } from 'styles/utils/sizes';

const Container = styled.div`
    ${({
        theme: {
            base: { layout }
        }
    }) => `
        margin: 0 auto;
        max-width: calc(${rem(layout.width)} - ${rem(layout.padding)} - ${rem(
        layout.padding
    )});
        width: 100%;
   `}
`;

export { Container };
