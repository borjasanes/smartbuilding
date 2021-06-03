import styled from '@emotion/styled';
import { Container } from 'modules/app/layout/main/container';
import { rem } from 'styles/utils/sizes';
import BgImage from 'assets/img/bg_title.svg';
import { PropsWithChildren } from 'react';

const PageWrapper = styled.section`
    display: flex;
    height: 100%;
    flex-direction: column;
`;

type TitleProps = {
    label: string;
};

const PageTitleWrapper = styled.div`
    ${({
        theme: {
            base: { colors }
        }
    }) => `
        align-items: center;
        background: url(${BgImage}) no-repeat center right ${
        colors.neutral.gray
    };
        display: flex;
        height: ${rem(64)};
        justify-content: flex-start;
        overflow: hidden;
    `}
`;

const PageTitle = styled.h1`
    ${({
        theme: {
            base: {
                fonts: { getHeadlinesConfig }
            }
        }
    }) => `
        ${getHeadlinesConfig('L')};
        letter-spacing: ${rem(-2)};
        padding: 0 ${rem(8)};
    `}
`;

const Section = ({ label, children }: PropsWithChildren<TitleProps>) => {
    return (
        <PageWrapper>
            <PageTitleWrapper>
                <Container>
                    <PageTitle>{label}</PageTitle>
                </Container>
            </PageTitleWrapper>
            {children}
        </PageWrapper>
    );
};

export { Section };
