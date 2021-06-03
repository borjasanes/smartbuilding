import { rem } from '../utils/sizes';

export type HeadlinesSize = 'L' | 'M';
type FontHeadlinesTypeSize = {
    L: number;
    M: number;
};
type FontHeadlinesTypography = {
    L: string;
    M: string;
};

export type TextsSize = 'XL' | 'L' | 'M' | 'S' | 'XS';
type FontTextsTypeSize = {
    XL: number;
    L: number;
    M: number;
    S: number;
    XS: number;
};

type FontType = {
    headline: FontHeadlinesTypeSize;
    lineHeightHeadline: FontHeadlinesTypeSize;
    typographyHeadline: FontHeadlinesTypography;
    text: FontTextsTypeSize;
    lineHeightText: FontTextsTypeSize;
};

export type Font = {
    regularFont: string;
    mediumFont: string;
    boldFont: string;
    getHeadlinesConfig: (size: HeadlinesSize) => string;
    getTextsConfig: (size: TextsSize) => string;
};

const createFont = (
    regularFont: string,
    mediumFont: string,
    boldFont: string,
    fontSize: FontType
): Font => ({
    regularFont,
    mediumFont,
    boldFont,
    getHeadlinesConfig: (size: HeadlinesSize): string => `
            font-family: '${fontSize.typographyHeadline[size]}';
            font-size: ${rem(fontSize.headline[size])};
            line-height: ${rem(fontSize.lineHeightHeadline[size])};
        `,
    getTextsConfig: (size: TextsSize): string => `
            font-size: ${rem(fontSize.text[size])};
            line-height: ${rem(fontSize.lineHeightText[size])};
        `
});

export { createFont };
