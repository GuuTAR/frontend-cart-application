import { Text, View } from "react-native"
import React, { useState } from "react"
import { addToCartButton, buttonWrapper, footerContainer, inputContainer } from "./style"
import Row from "../../../../component/Row"
import InputNumber from '../../../../component/InputNumber/InputNumber'
import { Button } from "react-native-elements"
import { useStore } from "../../../../mobx/useStore"

const ProductFooter = ({ product, hide }) => {

    const { addItemToCart } = useStore().cartStore

    const [count, setCount] = useState(1)

    const handleAddItemToCart = () => {
        addItemToCart({ ...product, count })
        hide()
    }
    
    return (
        <View style={footerContainer} >
            <Row containerStyle={inputContainer}>
                <Text>จำนวน</Text>
                <InputNumber min={1} max={10} setNumber={setCount} />
            </Row>
            <View style={buttonWrapper}>
                <Button title="เพิ่มลงตะกร้า" buttonStyle={addToCartButton} onPress={handleAddItemToCart} />
            </View>
        </View>
    )
}

export default ProductFooter