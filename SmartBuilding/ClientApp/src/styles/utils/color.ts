const convertDecimalToHexadecimal = (number: number): string =>
    number.toString(16);

const convertHexadecimalToDecimal = (strNumber: string): number =>
    parseInt(strNumber, 16);

const getRedNumbers = (colorNumber: string): string => colorNumber.substr(0, 2);

const getGreenNumbers = (colorNumber: string): string =>
    colorNumber.substr(2, 2);

const getBlueNumbers = (colorNumber: string): string =>
    colorNumber.substr(4, 2);

const mixCompositionColor = (
    composition1: string,
    composition2: string,
    weight: number
): string => {
    const decimal1 = convertHexadecimalToDecimal(composition1);
    const decimal2 = convertHexadecimalToDecimal(composition2);

    const valueConversion = convertDecimalToHexadecimal(
        Math.floor(decimal2 + (decimal1 - decimal2) * (weight / 100.0))
    );

    return valueConversion.length >= 2
        ? valueConversion
        : valueConversion.length === 1
        ? '0' + valueConversion
        : '00';
};

const checkColorRgb = (color: string): boolean => {
    const colorRgbRegex = new RegExp('^#?([A-Fa-f0-9]{6})$');
    return colorRgbRegex.test(color);
};

const getNumbersFromColor = (color: string): string => color.replace('#', '');

const mix = (color1: string, color2: string, weight: number = 50): string => {
    if (weight > 100 || weight < 0)
        throw new Error('weight must be a number between 0 and 100');
    if (!checkColorRgb(color1) || !checkColorRgb(color2))
        throw new Error('colors are not in correct format (#546655 | 546655)');

    const color1Numbers = getNumbersFromColor(color1);
    const color2Numbers = getNumbersFromColor(color2);

    const r = mixCompositionColor(
        getRedNumbers(color1Numbers),
        getRedNumbers(color2Numbers),
        weight
    );
    const g = mixCompositionColor(
        getGreenNumbers(color1Numbers),
        getGreenNumbers(color2Numbers),
        weight
    );
    const b = mixCompositionColor(
        getBlueNumbers(color1Numbers),
        getBlueNumbers(color2Numbers),
        weight
    );

    return `#${r}${g}${b}`;
};

const getRgbaStrFromHexColor = (color: string, opacity: number): string => {
    if (!checkColorRgb(color))
        throw new Error('colors are not in correct format (#546655 | 546655)');

    const colorNumbers = getNumbersFromColor(color);

    const r = convertHexadecimalToDecimal(getRedNumbers(colorNumbers));
    const g = convertHexadecimalToDecimal(getGreenNumbers(colorNumbers));
    const b = convertHexadecimalToDecimal(getBlueNumbers(colorNumbers));

    return `rgba(${r},${g},${b}, ${opacity})`;
};

export { mix, getRgbaStrFromHexColor, checkColorRgb };
