import { Section } from 'modules/app/layout/main/section';
import { ReactComponent as GridGraphImage } from 'assets/img/grid-graph.svg';
import { ReactComponent as CompleteGraphImage } from 'assets/img/complete-graph.svg';
import { ReactComponent as GraphLegend } from 'assets/img/graph-legend.svg';
import {
    AreaFeatured,
    AreaMini,
    AreaGridGraph,
    AreaCompleteGraph,
    GraphLegendImage
} from './dashboard/dashboard';
import { GridTemplate, DataCard, BaseCard } from 'modules/app/shared';
import { HvacCard } from './featured-cards/hvac-card';
import { TemperatureCard } from './featured-cards/temperature-card';
import { AnomaliesCard } from './featured-cards/anomalies-card';
import { EnvironmentalCard } from './featured-cards/environmental-card';
import { Container } from 'modules/app/layout/main/container';
import { rem } from 'styles/utils/sizes';
import styled from '@emotion/styled';

const SectionWrapper = styled.div`
    padding: ${rem(40)} ${rem(8)};
`;

const Home = () => {
    return (
        <Section label='Dashboard'>
            <Container>
                <SectionWrapper>
                    <GridTemplate
                        columns={3}
                        areas='
                            "featured mini gridgraph"
                            "featured mini gridgraph"
                            "featured completegraph completegraph"
                            "featured completegraph completegraph"
                        '
                    >
                        <AreaFeatured>
                            <GridTemplate>
                                <HvacCard />
                                <TemperatureCard />
                                <AnomaliesCard />
                                <EnvironmentalCard />
                            </GridTemplate>
                        </AreaFeatured>
                        <AreaMini>
                            <GridTemplate columns={3}>
                                <DataCard
                                    title='Work Space Occupancy'
                                    percentage={4.3}
                                    data='2/24'
                                    styleData='success'
                                />
                                <DataCard
                                    title='Collaborative Space Occupancy'
                                    percentage={2.7}
                                    data='8/32'
                                    isWarning
                                />
                                <DataCard
                                    title='Focus Space Occupancy'
                                    percentage={24.8}
                                    data='6/8'
                                    styleData='success'
                                />
                                <DataCard
                                    title='Average Occupancy'
                                    percentage={9.6}
                                    data='32.6%'
                                    styleData='success'
                                />
                                <DataCard
                                    title='Occupancy Weekly Trend'
                                    percentage={13.2}
                                    data='+12.7%'
                                    styleData='success'
                                />
                                <DataCard
                                    title='Occupancy Monthly Trend'
                                    percentage={12.6}
                                    data='+5.4%'
                                    isWarning
                                    styleData='danger'
                                />
                            </GridTemplate>
                        </AreaMini>
                        <AreaGridGraph>
                            <GridTemplate>
                                <BaseCard title='Energy Consumption hourly Average'>
                                    <GridGraphImage className='graph-image' />
                                </BaseCard>
                            </GridTemplate>
                        </AreaGridGraph>
                        <AreaCompleteGraph>
                            <GridTemplate>
                                <BaseCard title='Building Occupancy Trend'>
                                    <GraphLegendImage>
                                        <GraphLegend className='graph-legend' />
                                        <CompleteGraphImage className='graph-image' />
                                    </GraphLegendImage>
                                </BaseCard>
                            </GridTemplate>
                        </AreaCompleteGraph>
                    </GridTemplate>
                </SectionWrapper>
            </Container>
        </Section>
    );
};

export default Home;
