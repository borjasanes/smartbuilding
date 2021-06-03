import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { rem } from 'styles/utils/sizes';

export type GridTemplateAlign = 'top' | 'center' | 'bottom';

type GridTemplateWrapperProps = {
    align?: GridTemplateAlign;
    columns?: number;
    gap?: number;
    areas?: string;
};

const GridTemplateDictionary: { [key: string]: string } = {
    center: 'center',
    bottom: 'flex-end',
    top: 'flex-start'
};

const GridTemplateWrapper = styled.div<GridTemplateWrapperProps>`
    ${({ align, columns, gap, areas }) => `
        align-items: ${GridTemplateDictionary[align ?? 'top']};
        display: grid;
        gap: ${rem(gap ?? 20)};
        grid-template-columns: repeat(${columns}, 1fr);
        ${areas ? `grid-template-areas: ${areas}` : ''};
    `}
`;

const GridTemplate = ({
    align,
    columns = 1,
    children,
    gap,
    areas
}: PropsWithChildren<GridTemplateWrapperProps>) => {
    return (
        <GridTemplateWrapper
            align={align}
            columns={columns}
            gap={gap}
            areas={areas}
        >
            {children}
        </GridTemplateWrapper>
    );
};

export { GridTemplate, GridTemplateWrapper };
