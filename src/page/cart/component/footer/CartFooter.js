import { Text, View } from "react-native"
import * as React from "react"
import { Button } from "react-native-elements/dist/buttons/Button"
import Row from '../../../../component/Row'
import { cartFooterContainer, checkoutButton, desRow } from "./style"

const CartFooter = ({totalProduct = 5, totalPrice = 1000}) => {
    return (
        <View style={cartFooterContainer}>
            <Row containerStyle={desRow}>
                <Text>จำนวนสินค้า</Text>
                <Text>{totalProduct}</Text>
            </Row>
            <Row containerStyle={desRow}>
                <Text>ราคารวมทั้งสิ้น</Text>
                <Text>{totalPrice}</Text>
            </Row>
            <Button title="checkout" buttonStyle={checkoutButton} />
        </View>
    )
}

export default CartFooter