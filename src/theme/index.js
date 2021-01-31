const lightTheme = {
  background: 'white',
  text: 'black',
};

const darkTheme = {
  background: 'black',
  text: 'white',
};

const mainTheme = {
  palette: {
    primary: {
      light: 'rgba(28, 28, 28, 0.75)',
      main: 'rgba(28, 28, 28, 1)',
    },
    secondary: {
      main: 'rgba(240, 171, 21, 1)',
      dark: 'rgba(227, 162, 19, 1)',
    },
    text: {
      primary: 'rgba(28, 28, 28, 1)',
      secondary: 'rgba(81, 81, 81, 1)',
    },
    textLight: {
      primary: 'rgba(255, 255, 255, 1)',
      secondary: 'rgba(187, 187, 187, 1)',
      caption: 'rgba(201, 201, 201, 1)',
    },
    success: {
      main: '#4caf50',
    },
    error: {
      main: '#f44336',
      dark: '#783d38',
    },
    warning: {
      main: '#ff9800',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#E7E5E5',
      A200: '#BDBDBD',
      A400: '#858585',
      A700: '#515151',
    },
    common: {
      white: '#fff',
      black: '#000',
    },
  },
  shape: {
    borderRadius: '6px',
  },
  device: {
    xs: '(max-width: 480px)',
    sm: '(max-width: 576px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 992px)',
    xl: '(max-width: 1200px)',
    xxl: '(max-width: 1600px)',
  },
  spacing: (multiplier) => `${multiplier * 8}px`,
  breakpoint: 768,
};

export default mainTheme;
export { lightTheme, darkTheme };
