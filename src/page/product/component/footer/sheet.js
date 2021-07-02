import { StyleSheet } from "react-native";
import { gray } from "../../../../style/variables";

export const stylesheet = StyleSheet.create({
    footerContainer: {
        paddingHorizontal: '8%',
        paddingVertical: '8%',

        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        alignItems: 'center',
    },
    inputContainer: {
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    buttonWrapper: {
        width: '100%',
        paddingVertical: 10,

        borderTopColor: gray,

        borderWidth: 0,
        borderTopWidth: 1
    },
    addToCartButton: {
        width: '80%',
        justifyContent:'flex-start',
        paddingHorizontal: '15%',
        borderRadius: 10
    }
})