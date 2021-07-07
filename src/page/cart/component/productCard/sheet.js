import { StyleSheet } from "react-native";

export const stylesheet = StyleSheet.create({
    productCard: {
        width: '96%',

        marginVertical: 5,
        padding: 10,

        borderRadius: 15
    },
    contentWrapper : {
        width: '60%',
        marginLeft: 10,

        justifyContent: 'space-around'
    },
    productImg: {
        width: '35%',
        height: 120
    },
    productNameWrapper: {
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    productName: {
        fontSize: 18
    },
    productDes: {
        width: '100%'
    },

    actionWrapper: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%"
    }
})