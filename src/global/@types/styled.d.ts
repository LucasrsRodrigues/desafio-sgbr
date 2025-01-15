import lightTheme from '../styles/light.theme';
import 'styled-components/native';

type ColorMode = 'light' | 'dark';

declare module 'styled-components/native' {
  type ThemeType = typeof lightTheme;

  export interface DefaultTheme extends ThemeType {
  }
}
