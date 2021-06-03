import { Global, css } from '@emotion/react';
import { customReset } from './custom-reset';
import { Theme } from './theme';
import { rem } from './utils/sizes';

const GlobalStyles = () => {
    return (
        <Global
            styles={({
                base: {
                    colors,
                    fonts: { getTextsConfig, mediumFont },
                    scrollbar
                }
            }: Theme) => css`
                ${customReset}

                @font-face {
                    font-family: 'DM Sans Regular';
                    src: url('/static/fonts/dmsans/DMSans-Regular.ttf')
                        format('truetype');
                    font-weight: 400;
                    font-style: normal;
                    font-display: swap;
                }

                @font-face {
                    font-family: 'DM Sans Medium';
                    src: url('/static/fonts/dmsans/DMSans-Medium.ttf')
                        format('truetype');
                    font-weight: 500;
                    font-style: normal;
                    font-display: swap;
                }

                @font-face {
                    font-family: 'DM Sans Bold';
                    src: url('/static/fonts/dmsans/DMSans-Bold.ttf')
                        format('truetype');
                    font-weight: 700;
                    font-style: normal;
                    font-display: swap;
                }

                @font-face {
                    font-family: 'smartbuilding-iconsfont';
                    src: url('/static/fonts/iconsFont/smartbuilding-iconsfont.ttf')
                        format('woff');
                }

                body {
                    background-color: ${colors.layout.background};
                    color: ${colors.neutral.dark};
                    font-family: '${mediumFont}';
                    ${getTextsConfig('M')};
                    margin: 0;
                }

                html,
                body,
                #root {
                    height: auto;
                    min-height: 100vh;
                }

                * {
                    -webkit-print-color-adjust: exact;
                    color-adjust: exact;
                    print-color-adjust: exact;

                    &::-webkit-scrollbar {
                        background-color: ${scrollbar.bgScrollbar(colors)};
                        border-radius: ${rem(scrollbar.radius)};
                        height: ${rem(scrollbar.size)};
                        width: ${rem(scrollbar.size)};
                    }
                    &::-webkit-scrollbar-track {
                        background-color: ${scrollbar.bgScrollbarTrack(colors)};
                        border-radius: ${rem(scrollbar.radius)};
                    }
                    &::-webkit-scrollbar-thumb {
                        background-color: ${scrollbar.bgScrollbarThumb(colors)};
                        border-radius: ${rem(scrollbar.radius)};
                    }
                }
            `}
        />
    );
};

export { GlobalStyles };
