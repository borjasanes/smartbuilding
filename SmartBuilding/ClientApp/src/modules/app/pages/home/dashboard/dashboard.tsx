import styled from '@emotion/styled';
import { rem } from 'styles/utils/sizes';

const GraphLegendImage = styled.div`
    position: relative;

    > .graph-legend {
        position: absolute;
        right: ${rem(52)};
        top: ${rem(-28)};
    }

    > .graph-image {
        width: 100%;
    }
`;

const AreaFeatured = styled.div`
    grid-area: featured;
`;

const AreaMini = styled.div`
    grid-area: mini;
`;

const AreaGridGraph = styled.div`
    grid-area: gridgraph;
`;

const AreaCompleteGraph = styled.div`
    grid-area: completegraph;
`;

export {
    GraphLegendImage,
    AreaFeatured,
    AreaMini,
    AreaGridGraph,
    AreaCompleteGraph
};
