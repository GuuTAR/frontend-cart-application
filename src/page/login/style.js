import { colorStyle, layoutStyle } from "../../style/globalStyle";
import { stylesheet } from "./sheet";

export const loginPage = [stylesheet.loginPage, colorStyle.grayBG]
export const background = [stylesheet.background, colorStyle.darkPinkBG, layoutStyle.center]

export const loginTitle = [stylesheet.title, colorStyle.whiteText]
export const loginContainer = [layoutStyle.center, stylesheet.loginContainer]
export const formContainer = [colorStyle.whiteBG, stylesheet.formContainer]
export const input = [stylesheet.input]
export const otherLoginContainer = [colorStyle.whiteBG, stylesheet.otherLoginContainer, layoutStyle.center]