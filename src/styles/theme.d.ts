import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        dark: string;
        mid: string;
        light: string;
      };
      secondary: {
        dark: string;
        dark2: string;
        mid: string;
        light: string;
      };
      red: {
        dark: string;
        mid: string;
        light: string;
      };
      gray: {
        dark: string;
        mid: string;
        light: string;
        light2: string;
      };
      green: {
        dark: string;
      };
      dark: {
        dark: string;
        mid: string;
        light: string;
      };
    };
    fonts: {
      primary: string;
      secondary: string;
    };
    fontSizes: {
      small: string;
      regular: string;
      medium: string;
      large: string;
      h1: string;
      h2: string;
      h3: string;
    };
    logoHeight: string;
  }
}
