import { Image, Text, View } from "react-native"
import React, { useEffect, useState } from "react"
import Row from "../../../../component/Row"
import productPNG from '../../../../assets/product-example.png'
import Col from "../../../../component/Col"
import { actionWrapper, contentWrapper, productCard, productDes, productImg, productName, productNameWrapper, productPrice } from "./style"
import InputNumber from "../../../../component/InputNumber/InputNumber"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useStore } from '../../../../global_store/useStore'

const ProductCard = ({product}) => {

    console.log(product)

    const { deleteItemInCart, editItemInCart } = useStore().cartStore

    const [count, setCount] = useState(product?.count || 1)

    const handleDeleteItemFromCart = () => deleteItemInCart(product.id)

    useEffect(() => {
        editItemInCart({...product, count}, product.id)
    }, [count])
    
    console.log(product.price)
    return (
        <View style={productCard}>
            <Row>
                <Image source={productPNG} style={productImg} />
                <Col containerStyle={contentWrapper}>
                    <Row containerStyle={productNameWrapper}>
                        <Text style={productName}>{product?.name || "Product"}</Text>
                        <FontAwesome5 name="trash-alt" size={20} onPress={handleDeleteItemFromCart} />
                    </Row>
                    <Row containerStyle={productDes}>
                        <Text>{product?.desc || "Description"}</Text>
                    </Row>      
                    <Row containerStyle={actionWrapper}>
                        <InputNumber min={1} max={100} defaultValue={product?.count || 1} setNumber={setCount} />
                        <Text style={productPrice}>{ product?.price || 150}฿</Text>
                    </Row> 
                </Col>
            </Row>
        </View>
    )
}

export default ProductCard