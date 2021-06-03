import styled from '@emotion/styled';
import {
    Button,
    FeaturedCard,
    GridTemplate,
    Spinner,
    SpinnerOverlay
} from 'modules/app/shared';
import { useState } from 'react';
import { rem } from 'styles/utils/sizes';
import { ReactComponent as HVAC01 } from 'assets/img/hvac-01.svg';
import { ReactComponent as HVAC02 } from 'assets/img/hvac-02.svg';

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
    const [isShowData, setShowData] = useState<boolean>();

    return (
        <FeaturedCard title='HVAC system' icon='hvac'>
            {isShowData ? (
                <ContentWrapper>
                    <GridTemplate columns={2} gap={32}>
                        <GraphLoadingWrapper>
                            <Spinner isSmall />
                            <HVAC01 />
                        </GraphLoadingWrapper>
                        <GraphLoadingWrapper>
                            <Spinner isSmall />
                            <HVAC02 />
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
                            onClick={() => setShowData(!isShowData)}
                        />
                    </ButtonWrapper>
                </ContentWrapper>
            )}
        </FeaturedCard>
    );
};

export { HvacCard };
