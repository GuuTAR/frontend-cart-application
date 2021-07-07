import { Text, View } from "react-native"
import * as React from "react"
import { Button } from "react-native-elements/dist/buttons/Button"
import Row from '../../../../component/Row'
import { cartFooterContainer, checkoutButton, desRow } from "./style"
import { observer } from "mobx-react-lite"
import { useStore } from "../../../../global_store/useStore"

const CartFooter = observer(({totalProduct = 5}) => {

    const { totalPrice } = useStore().cartStore

    return (
        <View style={cartFooterContainer}>
            <Row containerStyle={desRow}>
                <Text>จำนวนสินค้า</Text>
                <Text>{totalProduct} รายการ</Text>
            </Row>
            <Row containerStyle={desRow}>
                <Text>ราคารวมทั้งสิ้น</Text>
                <Text>{totalPrice} บาท</Text>
            </Row>
            <Button title="checkout" buttonStyle={checkoutButton} />
        </View>
    )
})

export default CartFooter