import { stylesheet } from './sheet'
import { colorStyle, layoutStyle, textStyle } from '../../style/globalStyle'

export const registerPage = [stylesheet.registerPage, colorStyle.grayBG]

export const background = [stylesheet.background, colorStyle.darkPinkBG, layoutStyle.center]
export const registerTitle = [stylesheet.registerTitle, colorStyle.whiteText, textStyle.textCen]

export const registerContainer = [stylesheet.registerContainer, layoutStyle.center]
export const formContainer = [stylesheet.formContainer, colorStyle.whiteBG]

export const inputContainer = [stylesheet.inputContainer]
export const errorText = [stylesheet.errorText, colorStyle.redText, textStyle.textLeft]

export const errorCheckbox = [colorStyle.redText]

export const registerButton = [stylesheet.registerButton, colorStyle.darkPinkBG]

