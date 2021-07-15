import { StyleSheet } from "react-native";
import { black, darkPink, genBlack, gray, pink, red, thinPink, white } from "./variables";

export const colorStyle = StyleSheet.create({
    grayBG: {
        backgroundColor: gray,
    },
    whiteBG: {
        backgroundColor: white,
    },
    blackBG: {
        backgroundColor: black,
    },
    genBlackBG: {
        backgroundColor: genBlack,
    },
    darkPinkBG: {
        backgroundColor: darkPink,
    },
    pinkText: {
        color: pink,
    },
    blackText: {
        color: black,
    },
    whiteText: {
        color: white,
    },
    redText: {
        color: red,
    },
    thinPink: {
        color: thinPink
    },
    darkPinkText: {
        color: darkPink
    }
})

export const layoutStyle = StyleSheet.create({
    noWrap: {
        flexWrap: 'nowrap'
    },
    verMargin10: {
        marginVertical: 10
    },
    horMargin10: {
        marginHorizontal: 10
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    col: {
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export const textStyle = StyleSheet.create({
    textLeft: {
        textAlign: 'left'
    },
    textCen: {
        textAlign: 'center'
    },
    textRight: {
        textAlign: 'right'
    },
    bold: {
        fontWeight: 'bold'
    }
})