import { StyleSheet } from "react-native";
import { layoutStyle } from "../../style/globalStyle";
import { stylesheet } from "./sheet";

export const searchBar = [stylesheet.searchBar]
export const productContainer = [layoutStyle.row, stylesheet.productContainer]

export const style = StyleSheet.create({
    productContainer: {
        width: "100%",
        justifyContent: 'center'
    },
    searchBar: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        width: "100%"
    },
    search: {
        flex: 1,
        justifyContent: 'center',
        width: 100,
        height: 50,
        borderRadius: 10,

        paddingVertical: 0,
        marginRight: 10,
    },
    input: {
        height: 20,
        margin: 0,
    }
})