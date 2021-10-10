import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    surface: string;
    primary: string;
    positive: string;
    negative: string;
    attention: string;
    text: string;
    textInvert: string;
    secondaryText: string;
    surfaceStroke: string;
    fade0: string;
    fade1: string;
    fade2: string;
    fade3: string;
    fade4: string;
    fade5: string;
    fade6: string;
    fade7: string;
    fade8: string;
    fade9: string;
    fade10: string;
    button: {
      primary: Button;
      positive: Button;
      negative: Button;
      attention: Button;
      secondary: Button;
    };
    shadow: {
      small: string;
      medium: string;
      large: string;
    };
  }

  interface Button {
    default: string;
    interactive: string;
  }
}
