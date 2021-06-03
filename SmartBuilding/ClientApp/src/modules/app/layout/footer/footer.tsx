import styled from '@emotion/styled';
import { rem } from 'styles/utils/sizes';
import { Container } from '../main/container';

const FooterWrapper = styled.footer`
    ${({
        theme: {
            base: {
                colors,
                layout,
                fonts: { getTextsConfig }
            }
        }
    }) => `
        background-color: ${colors.primary.default};
        color: ${colors.neutral.fullLight};
        flex: 0 0 auto;
        ${getTextsConfig('S')};
        height: ${rem(64)};
        padding: 0 ${rem(layout.padding)};

        ${Container} {
            height: 100%;
        }

        ul {
            align-items: center;
            display: flex;
            height: 100%;
            justify-content: flex-end;

            > li {
                &:not(:first-of-type) {
                    margin-left: ${rem(18)};
                }

                &:hover {
                    cursor: default;
                }
            }
        }
   `}
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <ul>
                    <li>Privacy &amp; cookies</li>
                    <li>Terms of use</li>
                    <li>Trademarks</li>
                    <li>© Contoso 2021</li>
                </ul>
            </Container>
        </FooterWrapper>
    );
};

export { Footer };
