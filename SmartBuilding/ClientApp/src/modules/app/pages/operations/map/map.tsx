import styled from '@emotion/styled';
import MapImage from 'assets/img/map.png';
import { Spinner, SpinnerOverlay } from 'modules/app/shared';
import React, { useEffect, useState } from 'react';
import { rem } from 'styles/utils/sizes';
import {
    LocationPin,
    LocationPinItems,
    LocationPinList
} from '../location-pin/location-pin';
import { locationCities } from './cities';

const MapWrapper = styled.div`
    ${({
        theme: {
            base: { layout }
        }
    }) => `
        align-items: center;
        display: flex;
        flex-direction: column;
        height: ${rem(568)};
        justify-content: center;
        position: relative;

        > img {
            height: auto;
            width: ${rem(layout.width)};
        }

        ${LocationPinList} {
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            width: 100%;
        }

        ${SpinnerOverlay} {
            animation: FadeOut 2.5s;
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
    `}
`;

const ButtonMap = styled.button`
    height: ${rem(64)};
    position: fixed;
    left: 0;
    top: ${rem(72)};
    width: 100%;
`;

const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const Map = () => {
    const [locationPins, setLocationPins] = useState<LocationPinItems[]>(
        locationCities
    );

    const [randomActive, setRandomActive] = useState<boolean>(false);

    useEffect(() => {
        if (randomActive && locationPins.some((pin) => !pin.isActive)) {
            const pinsNoActive = locationPins.filter((pin) => !pin.isActive);

            const pinIndexRandom = getRandomNumber(0, pinsNoActive.length - 1);
            const pinRandom = pinsNoActive[pinIndexRandom];
            setTimeout(() => {
                setLocationPins(
                    locationPins.map((pin) => {
                        if (pin.label === pinRandom.label) {
                            return {
                                ...pin,
                                isActive: true
                            };
                        } else {
                            return pin;
                        }
                    })
                );
            }, 1200);
        }
    }, [locationPins, randomActive]);

    return (
        <MapWrapper>
            <Spinner />
            <img src={MapImage} alt='' />
            <LocationPin options={locationPins ?? []} />
            <ButtonMap onClick={() => setRandomActive(true)} />
        </MapWrapper>
    );
};

export { Map };
