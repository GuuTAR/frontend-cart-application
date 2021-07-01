import { StyleSheet } from "react-native";

export const stylesheet = StyleSheet.create({
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
    searchContainer: {
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