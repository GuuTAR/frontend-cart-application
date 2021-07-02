import { StyleSheet } from "react-native";

export const stylesheet = StyleSheet.create({
    registerPage: {
        flex: 1,
    },
    background: {
        width: '100%',
        height: 200,

        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,

        position: 'absolute',
        justifyContent: 'flex-start'
    },
    registerTitle: {
        fontSize: 20
    },
    registerContainer: {
        height: '100%',
    },
    formContainer: {
        width: '80%',

        paddingHorizontal: 20,
        paddingVertical: 10,

        borderRadius: 10,

        alignItems: 'center',
    },
    registerButton: {
        justifyContent: 'flex-start',
        paddingHorizontal: '20%'
    }
})