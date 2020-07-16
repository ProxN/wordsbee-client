import { DefaultTheme } from 'styled-components';

const Theme: DefaultTheme = {
  colors: {
    primary: {
      dark: '#052034',
      mid: '#062a43',
      light: '#083353',
    },
    secondary: {
      dark: '#93dd5c',
      dark2: '#9ce06a',
      mid: '#a5e378',
      light: '#afe686',
    },
    red: {
      dark: '#eb4d4b',
      mid: '#ed5c5a',
      light: '#ee6b6a',
    },
    green: {
      dark: '#12bb8c',
    },
    gray: {
      dark: '#d4dfea',
      mid: '#dfe7f0',
      light: '#ebf0f5',
      light2: '#f6f8fb',
    },
    dark: {
      dark: '#080b0e',
      mid: '#0e1419',
      light: '#141c24',
    },
  },
  fonts: {
    primary: 'Cabin, sans-serif',
    secondary: 'Overpass, sans-serif',
  },
  fontSizes: {
    small: '14px',
    regular: '16px',
    medium: '20px',
    large: '28px',
    h1: '50px',
    h2: '28px',
    h3: '22px',
  },
  logoHeight: '70px',
};

export default Theme;
