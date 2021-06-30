import { StyleSheet } from "react-native";
import { black, darkPink, gray, pink, white } from "./variables";

export const colorStyle = StyleSheet.create({
    grayBG: {
        backgroundColor: gray,
    },
    whiteBG: {
        backgroundColor: white,
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
    }
})

export const layoutStyle = StyleSheet.create({
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