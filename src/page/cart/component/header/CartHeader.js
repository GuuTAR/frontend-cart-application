import { Text, View } from "react-native"
import * as React from "react"
import { backButton, backButtonTitle, headerContainer, headerTitle } from "./style"
import Row from '../../../../component/Row'
import { Button } from "react-native-elements" 

const CartHeader = () => {
    return (
        <Row containerStyle={headerContainer}> 
            <Button title="<" buttonStyle={backButton} titleStyle={backButtonTitle} />
            <Text style={headerTitle}>My Cart</Text>
        </Row>
    )
}

export default CartHeader