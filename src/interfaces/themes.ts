export interface IMainTheme {
  colors: {
    extraDarkPurple: string;
    darkPurple: string;
    purple: string;
    lightPurple: string;
    extraLightPurple: string;

    extraDarkGreen: string;
    darkGreen: string;
    green: string;
    lightGreen: string;
    extraLightGreen: string;

    white: string;
    lightGray: string;
    gray: string;
    black: string;

    colorBody: string;
    colorContainer: string;
  };
  device: {
    mobileXS: string;
    mobileS: string;
    mobileM: string;
    mobileL: string;
    mobileXL: string;
    tablet: string;
    laptopS: string;
    laptopM: string;
    laptopL: string;
    desktopS: string;
    desktopM: string;
  };
}

export interface ISizeDevice {
  mobileXS: string;
  mobileS: string;
  mobileM: string;
  mobileL: string;
  mobileXL: string;
  tablet: string;
  laptopS: string;
  laptopM: string;
  laptopL: string;
  desktopS: string;
  desktopM: string;
}
