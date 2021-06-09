import styled from '@emotion/styled';
import {
    Button,
    FeaturedCard,
    GridTemplate,
    Spinner,
    SpinnerOverlay
} from 'modules/app/shared';
import { useEffect, useState } from 'react';
import { rem } from 'styles/utils/sizes';
import { Hvac } from 'modules/app/models';
import { DonutChart } from 'modules/app/shared/donut-chart/donut-chart';
import { DataLabelLabel } from 'modules/app/shared/data-label/data-label-label';

const DonutGraphWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
`;

const NoDataText = styled.p`
    ${({
        theme: {
            base: { colors }
        }
    }) => `
        color: ${colors.neutral.grayDark};
        margin-top: ${rem(12)};
        text-transform: uppercase;
    `}
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: auto;
`;

const GraphLoadingWrapper = styled.div`
    ${() => `
        position: relative;

        ${SpinnerOverlay} {
            animation: FadeOut 3s;
            opacity: 0;

            @keyframes FadeOut {
                0% {
                    opacity: 1;
                }
                80% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                }
            }
        }

        > svg {
            animation: FadeIn 2s;
            opacity: 1;

            @keyframes FadeIn {
                0% {
                    opacity: 0;
                }
                60% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
        }
    `}
`;

const HvacCard = () => {
    const [hvac, setItems] = useState<Hvac>();

    const fetchData = async () => {
        const result = await fetch('api/hvac');
        if (result.status === 200) {
            setItems(await result.json());
        }
    };

    return (
        <FeaturedCard title='HVAC system' icon='hvac'>
            {hvac ? (
                <ContentWrapper>
                    <GridTemplate columns={2} gap={32}>
                        <GraphLoadingWrapper>
                            <Spinner isSmall />
                            <DonutGraphWrapper>
                                <DonutChart
                                    size={85}
                                    itemCircleWidth={15}
                                    showTotal={true}
                                    showLegend={false}
                                    items={[
                                        {
                                            color: '#27A574',
                                            percentage:
                                                hvac?.nextMaintenanceDays || 0,
                                            title: 'days'
                                        }
                                    ]}
                                    total={hvac?.maintenancePeriodDays}
                                />
                                <DataLabelLabel>
                                    {hvac?.maintenancePeriodDays} days
                                </DataLabelLabel>
                                <DataLabelLabel>
                                    Next maintenance
                                </DataLabelLabel>
                            </DonutGraphWrapper>
                        </GraphLoadingWrapper>
                        <GraphLoadingWrapper>
                            <Spinner isSmall />
                            <DonutGraphWrapper>
                                <DonutChart
                                    size={85}
                                    itemCircleWidth={15}
                                    showTotal={true}
                                    showLegend={false}
                                    items={[
                                        {
                                            color: '#6e73ee',
                                            percentage:
                                                hvac?.projectedLifeYears || 0,
                                            title: 'years'
                                        }
                                    ]}
                                    total={hvac?.projectedLifePeriodYears}
                                />
                                <DataLabelLabel>
                                    {hvac?.projectedLifePeriodYears} years
                                </DataLabelLabel>
                                <DataLabelLabel>Projected life</DataLabelLabel>
                            </DonutGraphWrapper>
                        </GraphLoadingWrapper>
                    </GridTemplate>
                </ContentWrapper>
            ) : (
                <ContentWrapper>
                    <NoDataText>No Data Available</NoDataText>
                    <ButtonWrapper>
                        <Button
                            label='Refresh'
                            iconName='refresh'
                            onClick={() => fetchData()}
                        />
                    </ButtonWrapper>
                </ContentWrapper>
            )}
        </FeaturedCard>
    );
};

export { HvacCard };
