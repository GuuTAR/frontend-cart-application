import { StyleSheet } from "react-native";

export const stylesheet = StyleSheet.create({
    productPage: {
        flex: 1,
        alignItems: 'center'
    },
    productImgWrapper: {
        width: '95%',
        height: '40%',
        marginVertical: 10,

        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    productImg : {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    addToCartButton: {
        fontSize: 30,
        padding: 8,
        borderRadius: 8,
    },
    productTextWrapper: {
        width: '95%',
    },
    productName: {
        fontSize: 20,
        marginBottom: 5
    },
    productDescWrapper: {
        minHeight: '15%',
        marginBottom: 10
    },
    productDesc: {
        fontSize: 20
    },
    otherImgText: {

    },
    horizontalView: {
        width: '100%',
        height: 100,
        paddingHorizontal: '2.5%'
    },
    imgWrapper: {
        height: '100%',
        justifyContent: 'flex-start',
        marginTop: 5
    },
    otherImg: {
        width: 100,
        height: 100,
        marginRight: 5
    }
})