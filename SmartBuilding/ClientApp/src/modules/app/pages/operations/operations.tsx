import styled from '@emotion/styled';
import { Section } from 'modules/app/layout/main/section';
import { rem } from 'styles/utils/sizes';
import { Map } from './map/map';

const SectionWrapper = styled.div`
    ${({
        theme: {
            base: { layout }
        }
    }) => `
        align-items: center;
        display: flex;
        flex: 1;
        margin: 0 auto;
        max-width: ${rem(layout.width)};
        width: 100%;
    `}
`;

const Operations = () => {
    return (
        <Section label='Operations'>
            <SectionWrapper>
                <Map />
            </SectionWrapper>
        </Section>
    );
};

export default Operations;
