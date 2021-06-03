import { createFont, Font } from './theme/fonts';

export type ThemeColors = {
    primary: {
        default: string;
    };
    secondary: {
        dark: string;
        light: string;
        danger: string;
        warning: string;
        default: string;
        success: string;
    };
    neutral: {
        dark: string;
        grayDark: string;
        gray: string;
        grayLight: string;
        fullLight: string;
    };
    layout: {
        background: string;
    };
    graphs: {
        border: string;
        empty: string;
    };
    locationPin: {
        default: string;
        active: string;
        label: string;
    };
};

export type Theme = {
    base: {
        colors: ThemeColors;
        fonts: Font;
        zindex: {
            spinner: number;
            modalContent: number;
            modalOverlay: number;
            super: number;
            above: number;
            default: number;
            base: number;
            below: number;
        };
        layout: {
            padding: number;
            width: number;
        };
        scrollbar: {
            radius: number;
            size: number;
            bgScrollbar: (colors: ThemeColors) => string;
            bgScrollbarTrack: (colors: ThemeColors) => string;
            bgScrollbarThumb: (colors: ThemeColors) => string;
        };
        graphs: {
            emptyGraphRelativeWidthPx: number;
        };
    };
};

const theme: Theme = {
    base: {
        colors: {
            primary: {
                default: '#051577'
            },
            secondary: {
                dark: '#6E73EE',
                light: '#22E0E0',
                danger: '#FE2D2A',
                warning: '#F5C000',
                default: '#9C9600',
                success: '#27A574'
            },
            neutral: {
                dark: '#3D3D3D',
                grayDark: '#949494',
                gray: '#F1F1F1',
                grayLight: '#F6F6F6',
                fullLight: '#ffffff'
            },
            layout: {
                background: '#F6F6F6'
            },
            graphs: {
                border: '#22E0E0',
                empty: '#F1F1F1'
            },
            locationPin: {
                default: '#8B8ED3',
                active: '#59C098',
                label: '#6A6A6A'
            }
        },
        fonts: createFont('DM Sans Regular', 'DM Sans Medium', 'DM Sans Bold', {
            headline: {
                L: 32,
                M: 18
            },
            lineHeightHeadline: {
                L: 48,
                M: 20
            },
            typographyHeadline: {
                L: 'DM Sans Bold',
                M: 'DM Sans Medium'
            },
            text: {
                XL: 36,
                L: 18,
                M: 16,
                S: 13,
                XS: 10
            },
            lineHeightText: {
                XL: 48,
                L: 24,
                M: 20,
                S: 20,
                XS: 12
            }
        }),
        zindex: {
            spinner: 9999,
            modalContent: 9003,
            modalOverlay: 9002,
            super: 9000,
            above: 900,
            default: 1,
            base: 0,
            below: -1
        },
        layout: {
            padding: 40,
            width: 1366
        },
        scrollbar: {
            radius: 4,
            size: 6,
            bgScrollbar: (colors: ThemeColors) => `${colors.neutral.gray}`,
            bgScrollbarTrack: (colors: ThemeColors) => `${colors.neutral.gray}`,
            bgScrollbarThumb: (colors: ThemeColors) =>
                `${colors.secondary.dark}`
        },
        graphs: {
            emptyGraphRelativeWidthPx: 6
        }
    }
};

export default theme;
