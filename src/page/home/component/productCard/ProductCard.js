import { Image, Pressable, Text } from "react-native"
import * as React from "react"
import { firstProduct, firstProductContent, firstProductImg, price, productCard, productContent, productDes, productImg, productName } from "./style"
import Row from "../../../../component/Row"
import Col from "../../../../component/Col"
import productPNG from '../../../../assets/product-example.png'

const ProductCard = ({ first, goProductPage }) => {

    const handleGoProductPage = () => goProductPage()

    return (
        <Pressable 
            onPress={handleGoProductPage}
            style={[productCard, first && firstProduct]}
        >
            <Row>
                <Image
                    source={productPNG}
                    style={[productImg, first && firstProductImg]}
                />
                <Col containerStyle={first ? firstProductContent : productContent}>
                    <Row>
                        <Text style={productName}>Product</Text>
                    </Row>
                    <Row>
                        <Text style={productDes}>na dattebayo! dattebayo! dattebayo! dattebayo! dattebayo!</Text>
                    </Row>
                </Col>
            </Row>
            <Text style={price}>150฿</Text>
        </Pressable>
    )
}

export default ProductCard