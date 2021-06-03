import styled from '@emotion/styled';
import { Icon, IconWrapper } from 'modules/app/shared';
import PinBulletImage from 'assets/img/bullet.svg';
import { rem } from 'styles/utils/sizes';

export type LocationPinStyle = 'danger' | 'warning';

export interface LocationPinItems {
    label: string;
    positionX: number;
    positionY: number;
    isActive?: boolean;
}

type LocationPinProps = {
    options: LocationPinItems[];
};

const LocationPinList = styled.ul``;

const LocationPinItem = styled.div<{
    positionX: number;
    positionY: number;
    isActive?: boolean;
}>`
    ${({
        theme: {
            base: { colors, zindex }
        },
        positionX,
        positionY,
        isActive
    }) => `
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        top: ${rem(positionX)};
        left: ${rem(positionY)};
        width: ${rem(80)};

        ${IconWrapper} {
            color: ${
                isActive
                    ? colors.locationPin.active
                    : colors.locationPin.default
            };
            margin-bottom: ${rem(4)};
            position: relative;

            &:before {
                z-index: ${zindex.default};
            }

            &:after {
                background: url(${PinBulletImage}) no-repeat center center transparent;
                content: '';
                display: block;
                height: ${rem(7)};
                width: ${rem(7)};
                z-index: ${zindex.base};
                position: absolute;
                bottom: ${rem(-4)};
                left: 50%;
                transform: translateX(-50%);
            }
        }

        ${
            isActive
                ? `${IconWrapper} {
                    animation: transformScale 0.2s;
                    transform-origin: bottom;
                }`
                : ''
        };
        
        @keyframes transformScale {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.2);
            }
            100% {
                transform: scale(1);
            }
        }
    `}
`;

const LocationPinLabel = styled.text`
    ${({
        theme: {
            base: {
                colors,
                fonts: { getTextsConfig }
            }
        }
    }) => `
        color: ${colors.locationPin.label};
        ${getTextsConfig('XS')};
        text-shadow: 0 0 2px ${colors.neutral.fullLight};
    `}
`;

const LocationPin = ({ options }: LocationPinProps) => {
    return (
        <LocationPinList>
            {options.map((item: LocationPinItems, index) => (
                <li key={index}>
                    <LocationPinItem
                        positionX={item.positionX}
                        positionY={item.positionY}
                        isActive={item.isActive}
                    >
                        <Icon iconName='location-pin' />
                        <LocationPinLabel>{item.label}</LocationPinLabel>
                    </LocationPinItem>
                </li>
            ))}
        </LocationPinList>
    );
};

export { LocationPin, LocationPinList };
