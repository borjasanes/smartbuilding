import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';
import { rem } from 'styles/utils/sizes';

type CardProps = {
    title: string;
};

const CardWrapper = styled.article`
    ${({
        theme: {
            base: { colors }
        }
    }) => `
        background-color: ${colors.neutral.fullLight};
        border-radius: ${rem(8)};
        overflow: hidden;
   `}
`;

const CardContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    min-height: ${rem(340)};
    padding: ${rem(16)} ${rem(16)} ${rem(12)};
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

const CardContent = styled.div``;

const BaseCard = ({ title, children }: PropsWithChildren<CardProps>) => {
    return (
        <CardWrapper>
            <CardContainer>
                <CardTitle>{title}</CardTitle>
                <CardContent>{children}</CardContent>
            </CardContainer>
        </CardWrapper>
    );
};

export { BaseCard };
