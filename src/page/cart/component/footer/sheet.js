import { StyleSheet } from "react-native";

export const stylesheet = StyleSheet.create({
    cartFooterContainer : {
        height: '25%',
        alignItems: "center",
        justifyContent: 'center',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    },
    desRow: {
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',

        marginBottom: 3
    },
    checkoutButton: {
        borderRadius: 20,
        marginTop: 7,

        paddingVertical: '2%',
        paddingHorizontal: '15%',

        justifyContent: 'flex-start'
    },  
    unitText: {
        width: 70
    }
})