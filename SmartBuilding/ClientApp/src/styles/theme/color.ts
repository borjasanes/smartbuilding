import { mix } from '../utils/color';

export type Color = {
    default: string;
    light: string;
    extralight: string;
    dark: string;
    lightColorPercent: number;
    extraLightColorPercent: number;
    darkColorPercent: number;
    setPrimaryColor: (primaryColor: string) => void;
};

const getAccentPrimaryColors = (
    primaryColor: string,
    lightColorPercent: number,
    extraLightColorPercent: number,
    darkColorPercent: number
): {
    lightPrimaryColor: string;
    extraLightPrimaryColor: string;
    darkPrimaryColor: string;
} => ({
    lightPrimaryColor: mix('#ffffff', primaryColor, lightColorPercent),
    extraLightPrimaryColor: mix(
        '#ffffff',
        primaryColor,
        extraLightColorPercent
    ),
    darkPrimaryColor: mix('#000000', primaryColor, darkColorPercent)
});

const createColor = (
    primaryColor: string,
    lightPrimaryPercent: number,
    extraLightPrimaryPercent: number,
    darkPrimaryPercent: number
): Color => {
    const lightColorPercent = lightPrimaryPercent;
    const extraLightColorPercent = extraLightPrimaryPercent;
    const darkColorPercent = darkPrimaryPercent;
    let color = primaryColor;
    let { lightPrimaryColor, extraLightPrimaryColor, darkPrimaryColor } =
        getAccentPrimaryColors(
            primaryColor,
            lightColorPercent,
            extraLightColorPercent,
            darkColorPercent
        );

    const setPrimaryColor = (primaryColor: string): void => {
        color = primaryColor;
        const newAccentColors = getAccentPrimaryColors(
            primaryColor,
            lightColorPercent,
            extraLightColorPercent,
            darkColorPercent
        );
        lightPrimaryColor = newAccentColors.lightPrimaryColor;
        extraLightPrimaryColor = newAccentColors.extraLightPrimaryColor;
        darkPrimaryColor = newAccentColors.darkPrimaryColor;
    };

    return {
        default: primaryColor,
        lightColorPercent,
        extraLightColorPercent,
        darkColorPercent,
        light: lightPrimaryColor,
        extralight: extraLightPrimaryColor,
        dark: darkPrimaryColor,
        setPrimaryColor
    };
};

export { createColor };
