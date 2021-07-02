import { Image, ScrollView, Text, View } from "react-native"
import React from "react"
import productPNG from '../../assets/product-example.png'
import { horizontalView, imgWrapper, otherImg, otherImgTextWrapper, productDescWrapper, productImg, productName, productNameWrapper, productPage } from "./style"
import Row from '../../component/Row'
import Header from '../../component/header/Header'

const ProductPage = ({ name = 'product', desc = 'ของดีเมืองอุทัย', navigation }) => {

    const handleGoBack = () => navigation.goBack()

    return (
        <View style={productPage}>
            <Header title={name} goBack={handleGoBack} />
            <Image source={productPNG} style={productImg} />
            <Row containerStyle={productNameWrapper}>
                <Text style={productName}>{name}</Text>
            </Row>
            <Row containerStyle={productDescWrapper}>
                <Text >{desc}</Text>
            </Row>
            <Row containerStyle={productNameWrapper}>
                <Text style={otherImgTextWrapper}>รูปสินค้าเพิ่มเติม</Text>
            </Row>
            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={horizontalView}
            >
                <Row containerStyle={imgWrapper}>
                    <Image source={productPNG} style={otherImg} />
                    <Image source={productPNG} style={otherImg} />
                    <Image source={productPNG} style={otherImg} />
                    <Image source={productPNG} style={otherImg} />
                    <Image source={productPNG} style={otherImg} />
                </Row>
            </ScrollView>

        </View>
    )
}

export default ProductPage