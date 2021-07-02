import { Image, Text, View } from "react-native"
import * as React from "react"
import Row from "../../../../component/Row"
import productPNG from '../../../../assets/product-example.png'
import Col from "../../../../component/Col"
import { actionWrapper, contentWrapper, productCard, productDes, productImg, productName, productPrice } from "./style"
import InputNumber from "../../../../component/InputNumber/InputNumber"

const ProductCard = () => {
    return (
        <View style={productCard}>
            <Row>
                <Image source={productPNG} style={productImg} />
                <Col containerStyle={contentWrapper}>
                    <Text style={productName}>Product</Text>
                    <Row containerStyle={productDes}>
                        <Text>na dattebayo! dattebayo! dattebayo! dattebayo! dattebayo!</Text>
                    </Row>      
                    <Row containerStyle={actionWrapper}>
                        <InputNumber min={1} max={10} />
                        <Text style={productPrice}>150฿</Text>
                    </Row> 
                </Col>
            </Row>
        </View>
    )
}

export default ProductCard