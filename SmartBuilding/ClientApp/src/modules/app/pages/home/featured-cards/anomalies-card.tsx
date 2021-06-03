import styled from '@emotion/styled';
import { DataLabel, FeaturedCard, GridTemplate } from 'modules/app/shared';

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
`;

const AnomaliesCard = () => {
    return (
        <FeaturedCard title='Anomalies detected' icon='anomalies'>
            <ContentWrapper>
                <GridTemplate columns={2} gap={4} align='bottom'>
                    <DataLabel
                        label='Action required'
                        dataValue={16}
                        dataStyle='warning'
                    />
                    <DataLabel
                        label='Warnings'
                        dataValue={108}
                        dataStyle='danger'
                    />
                </GridTemplate>
            </ContentWrapper>
        </FeaturedCard>
    );
};

export { AnomaliesCard };
