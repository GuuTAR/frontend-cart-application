import { StyleSheet } from "react-native";

export const stylesheet = StyleSheet.create({
    productPage: {
        flex: 1,
        alignItems: 'center'
    },
    productImg : {
        width: '95%',
        height: '40%',

        marginVertical: 10
    },
    productTextWrapper: {
        width: '95%',
    },
    productName: {
        fontSize: 20,
        marginBottom: 5
    },
    productDescWrapper: {
        height: '15%'
    },
    productDesc: {
        fontSize: 20
    },
    otherImgTextWrapper: {
        marginBottom: 8
    },
    horizontalView: {
        height: 100,
        paddingHorizontal: '2.5%'
    },
    imgWrapper: {
        height: '100%',
        alignItems: 'center'
    },
    otherImg: {
        width: 100,
        height: 100,
        marginRight: 5
    }
})