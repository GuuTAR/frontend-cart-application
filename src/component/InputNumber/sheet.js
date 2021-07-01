import { StyleSheet } from "react-native";
import { gray } from "../../style/variables";

export const stylesheet = StyleSheet.create({
    button: {
        width: 30,
        height: 30,

        padding: 5,
        borderRadius: 6
    },
    input: {
        width: 50,
        height: 30,

        padding: 5,
        textAlign: 'center',
        marginHorizontal: 5,

        borderColor: gray, 
        borderWidth: 1,

        borderRadius: 6
    }
})