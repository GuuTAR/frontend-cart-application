import { Text, View } from "react-native"
import React from "react"
import { addToCartButton, buttonWrapper, footerContainer, inputContainer } from "./style"
import Row from "../../../../component/Row"
import InputNumber from '../../../../component/InputNumber/InputNumber'
import { Button } from "react-native-elements"

const ProductFooter = () => {
    return (
        <View style={footerContainer} >
            <Row containerStyle={inputContainer}>
                <Text>จำนวน</Text>
                <InputNumber min={1} max={10} />
            </Row>
            <View style={buttonWrapper}>
                <Button title="เพิ่มลงตะกร้า" buttonStyle={addToCartButton} />
            </View>
        </View>
    )
}

export default ProductFooter