import { stylesheet } from './sheet'
import { colorStyle, layoutStyle, textStyle } from '../../style/globalStyle'

export const landingPage = [stylesheet.landingPage, colorStyle.grayBG]

export const background = [stylesheet.background, colorStyle.darkPinkBG, layoutStyle.center]

export const menuContainer = [stylesheet.menuContainer, layoutStyle.center]
export const menu = [stylesheet.menu, colorStyle.whiteBG]

export const landingTitle = [stylesheet.landingTitle, colorStyle.blackText, textStyle.textCen, textStyle.bold]
export const signInButton = [stylesheet.signInButton, colorStyle.darkPinkBG]

export const signOutButton = [stylesheet.signOutButton, colorStyle.whiteBG, colorStyle.darkPinkText]
export const signOutText = [stylesheet.signOutText, colorStyle.darkPinkText]
