
export interface ButtonColor {
  buttonColor: string, 
  labelColor: string
}

export interface ButtonTheme {
  light: ButtonColor,
  dark: ButtonColor
}

export const ButtonColors: ButtonTheme = {
  light: {
    buttonColor: '#000000', 
    labelColor: "#fff"
  },
  dark: {
    buttonColor: "#fff",labelColor: '#000000'
  }
}