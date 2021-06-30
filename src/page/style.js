import { StyleSheet } from "react-native";
import { facebook } from "../style/variables";

export const style = StyleSheet.create({
    loginPage: {  
       flex: 1
    },
    background: {
        width: '100%',
        height: 200,

        textAlign: 'center',
        position: 'absolute' ,

        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
    },
    title: {
        fontSize: 20
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        width: 300,
        height: 250,

        borderRadius: 5,

        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: 10,

        justifyContent: 'space-evenly',
    },
    input: {
        
    },
    otherLoginContainer: {
        width: 300,
        height: 60,
    },
})