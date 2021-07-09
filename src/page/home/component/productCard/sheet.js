import { StyleSheet } from "react-native";

export const styleSheet = StyleSheet.create({
    noWrap: {
        flexWrap: 'nowrap'
    },
    productCard: {
        width: "48%",

        padding: 15,
        
        marginHorizontal: 3,
        marginVertical: 3,

        borderRadius: 10,
    },
    productContent: {
        width: '100%'
    },
    productImg: {
        width: "100%",
        height: 130,
    },
    firstProductImg: {
        width: "45%",
        marginRight: 10
    },
    firstProductCard: {
        width: "97%",
    },
    firstProductContent: {
        width: '50%'
    },
    productName: {
        fontSize: 20
    },
    productDes: {
        width: '100%'
    },
    price: {
        textAlign: 'right'
    }
})