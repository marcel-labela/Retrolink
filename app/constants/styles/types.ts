import * as i from 'types';
import 'styled-components';
import theme from './theme';

export type Theme = typeof theme;

// Add Theme type to styled-components
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export type BaseStyled = {
  theme?: Theme;
  className?: string;
};

// Get color strings from theme
export type ThemeColors = keyof typeof theme.colors;

// Get subcolors from colors if they exist
export type SubThemeColors = {
  [color in ThemeColors]: Exclude<keyof typeof theme.colors[color], keyof string>
};

// Ensures colors exist in theme
export type ColorsFromTheme<Colors extends ThemeColors> = Colors;

// Ensures subcolor exists in color object
export type SubcolorsFromColor<Color extends ThemeColors> = SubThemeColors[Color];

// Ensures subcolor exists in theme
export type SubcolorFromTheme<Color extends ThemeColors, Subcolor extends SubThemeColors[Color]> = [Color, Subcolor];