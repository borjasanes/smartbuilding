import { FeaturedCard, GridTemplate } from 'modules/app/shared';
import { ProgressBar } from 'modules/app/shared/';

const TemperatureCard = () => {
    return (
        <FeaturedCard title='Temperature' icon='temperature'>
            <GridTemplate>
                <ProgressBar
                    label='Air Temperature In'
                    dataValue={24.5}
                    dataMax={42}
                    dataDanger={32}
                    dataType='ºC'
                />
                <ProgressBar
                    label='Air Temperature Out'
                    dataValue={34.2}
                    dataMax={42}
                    dataDanger={32}
                    dataType='ºC'
                />
            </GridTemplate>
        </FeaturedCard>
    );
};

export { TemperatureCard };
