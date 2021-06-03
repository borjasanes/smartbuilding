import '@emotion/react';
import { Theme } from '../styles/theme';

type DefaultTheme = Theme;

declare module '@emotion/react' {
    //eslint-disable-next-line
    export interface Theme extends DefaultTheme {}
}
