import { stylesheet } from "./sheet";
import { colorStyle, textStyle } from "../../style/globalStyle";

export const productPage = [stylesheet.productPage]

export const productImg = [stylesheet.productImg]
export const productNameWrapper = [stylesheet.productTextWrapper]
export const productName = [stylesheet.productName, textStyle.bold, textStyle.textLeft]
export const productDescWrapper = [stylesheet.productTextWrapper, stylesheet.productDescWrapper]
export const productDesc = [stylesheet.productDesc, textStyle.textLeft]

export const otherImgText = [textStyle.textLeft]
export const otherImgTextWrapper = [stylesheet.otherImgTextWrapper]

export const horizontalView = [stylesheet.horizontalView]
export const imgWrapper = [stylesheet.imgWrapper]
export const otherImg = [stylesheet.otherImg]