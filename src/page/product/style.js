import { stylesheet } from "./sheet";
import { colorStyle, textStyle } from "../../style/globalStyle";

export const productPage = [stylesheet.productPage]

export const productImgWrapper = [stylesheet.productImgWrapper]
export const productImg = [stylesheet.productImg]
export const addToCartButton = [stylesheet.addToCartButton, colorStyle.darkPinkBG, colorStyle.whiteText]

export const productNameWrapper = [stylesheet.productTextWrapper]
export const productName = [stylesheet.productName, textStyle.bold, textStyle.textLeft]
export const productDescWrapper = [stylesheet.productTextWrapper, stylesheet.productDescWrapper]
export const productDesc = [stylesheet.productDesc, textStyle.textLeft]

export const otherImgText = [textStyle.textLeft, textStyle.bold]

export const horizontalView = [stylesheet.horizontalView]
export const imgWrapper = [stylesheet.imgWrapper]
export const otherImg = [stylesheet.otherImg]