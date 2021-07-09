import { Image, Text, View } from "react-native"
import React, { useEffect, useState } from "react"
import Row from "../../../../component/Row"
import Col from "../../../../component/Col"
import { actionWrapper, contentWrapper, productCard, productDes, productImg, productName, productNameWrapper, productPrice } from "./style"
import InputNumber from "../../../../component/InputNumber/InputNumber"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useStore } from '../../../../global_store/useStore'
import { readmoreCutter } from "../../../../function/global"

const ProductCard = ({product}) => {

    const { deleteItemInCart, editItemInCart } = useStore().cartStore

    const [count, setCount] = useState(product?.count || 1)

    const handleDeleteItemFromCart = () => deleteItemInCart(product.id)

    useEffect(() => {
        editItemInCart({...product, count}, product.id)
    }, [count])
    
    return (
        <View style={productCard}>
            <Row>
                <Image source={product?.img} style={productImg} />
                <Col containerStyle={contentWrapper}>
                    <Row containerStyle={productNameWrapper}>
                        <Text style={productName}>{product?.name || "Product"}</Text>
                        <FontAwesome5 name="trash-alt" size={20} onPress={handleDeleteItemFromCart} />
                    </Row>
                    <Row containerStyle={productDes}>
                        <Text>{readmoreCutter(product?.desc || "Description", 105)}</Text>
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