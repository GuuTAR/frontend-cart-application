import { Image, Pressable, Text } from "react-native"
import * as React from "react"
import { firstProduct, firstProductContent, firstProductImg, price, productCard, productContent, productDes, productImg, productName } from "./style"
import Row from "../../../../component/Row"
import Col from "../../../../component/Col"
import productPNG from '../../../../assets/product-example.png'

const ProductCard = ({ first, goProductPage, product }) => {

    const handleGoProductPage = () => goProductPage(product)

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
                        <Text style={productName}>{product?.name || 'หูฟังไร้สาย'}</Text>
                    </Row>
                    <Row>
                        <Text style={productDes}>{product?.desc.length >= 100 ? product?.desc.slice(0, 100) + '...อ่านเพิ่มเติม' :  product?.desc}</Text>
                    </Row>
                </Col>
            </Row>
            <Text style={price}>{product?.price}฿</Text>
        </Pressable>
    )
}

export default ProductCard