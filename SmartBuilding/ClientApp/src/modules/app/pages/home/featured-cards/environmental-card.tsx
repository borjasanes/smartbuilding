import styled from '@emotion/styled';
import { FeaturedCard, GridTemplate } from 'modules/app/shared';
import { ReactComponent as Environmental01 } from 'assets/img/environmental-01.svg';
import { useTheme } from '@emotion/react';
import { DonutChart } from 'modules/app/shared/donut-chart/donut-chart';
import { DataLabelLabel } from 'modules/app/shared/data-label/data-label-label';

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;

    svg {
        width: 100%;
    }
`;

const DonutGraphWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
`;

const EnvironmentalCard = () => {
    const {
        base: { colors }
    } = useTheme();

    return (
        <FeaturedCard title='Environmental parameters' icon='environmental'>
            <ContentWrapper>
                <GridTemplate columns={2} gap={4} align='bottom'>
                    <Environmental01 />
                    <DonutGraphWrapper>
                        <DonutChart
                            size={85}
                            itemCircleWidth={15}
                            showTotal={true}
                            showLegend={false}
                            items={[
                                {
                                    color: colors.graphs.border,
                                    percentage: 63,
                                    title: 'Humidity level'
                                }
                            ]}
                        />
                        <DataLabelLabel>Humidity level</DataLabelLabel>
                    </DonutGraphWrapper>
                </GridTemplate>
            </ContentWrapper>
        </FeaturedCard>
    );
};

export { EnvironmentalCard };
