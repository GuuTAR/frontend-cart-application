import { StyleSheet } from "react-native";
import { darkPink } from "../../style/variables";

export const stylesheet = StyleSheet.create({
    landingPage: {
        flex: 1
    },
    background: {
        width: '100%',
        height: '50%',

        position: 'absolute'
    },
    menuContainer: {
        flex: 1
    },
    menu: {
        width: '90%',
        height: '40%',

        paddingHorizontal: '5%',
        paddingVertical: '5%',

        borderRadius: 15,
        justifyContent: 'space-evenly'
    },
    landingTitle: {
        fontSize: 20
    },
    signOutButton: {
        borderWidth: 1,
        borderColor: darkPink,
        color: 'pink'
    },
    signOutText: {
        
    }
})