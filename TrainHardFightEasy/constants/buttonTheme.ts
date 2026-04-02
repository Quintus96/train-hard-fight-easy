export interface ButtonColor {
  buttonColor: string;
  labelColor: string;
}

export interface ButtonTheme {
  light: ButtonColor;
  dark: ButtonColor;
}

export const ButtonThemes: ButtonTheme = {
  light: {
    buttonColor: 'bg-black',
    labelColor: 'text-white',
  },
  dark: {
    buttonColor: 'bg-white',
    labelColor: 'text-black',
  },
};
