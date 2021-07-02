import { Text, View } from "react-native"
import * as React from "react"
import { backButton, backButtonTitle, headerContainer, headerTitle } from "./style"
import Row from '../../../../component/Row'
import { Button } from "react-native-elements" 

const CartHeader = ({goBack}) => {
    return (
        <Row containerStyle={headerContainer}> 
            <Button title="<" buttonStyle={backButton} titleStyle={backButtonTitle} onPress={() => goBack()} />
            <Text style={headerTitle}>My Cart</Text>
        </Row>
    )
}

export default CartHeader