import { Dimensions, Image, ScrollView, Text, View } from "react-native"
import React, { useRef } from "react"
import productPNG from '../../assets/product-example.png'
import { addToCartButton, horizontalView, imgWrapper, otherImg, otherImgTextWrapper, productDescWrapper, productImg, productImgWrapper, productName, productNameWrapper, productPage } from "./style"
import Row from '../../component/Row'
import Header from '../../component/header/Header'
import ProductFooter from "./component/footer/Footer"
import RBSheet from "react-native-raw-bottom-sheet"
import AntDesign from 'react-native-vector-icons/AntDesign'

const screenHeight = Dimensions.get('screen').height

const ProductPage = ({ name = 'product', desc = 'ของดีเมืองอุทัย', navigation }) => {

    const bottomSheet = useRef()

    const handleGoBack = () => navigation.goBack()
    const handleshowAddCart = () => bottomSheet.current.open()

    return (
        <View style={productPage}>
            <Header title={name} goBack={handleGoBack} />
            <View style={productImgWrapper}>
                <Image source={productPNG} style={productImg} />
                <AntDesign name="shoppingcart" style={addToCartButton} onPress={handleshowAddCart}/>
            </View>
            <Row containerStyle={productNameWrapper}>
                <Text style={productName}>{name}</Text>
            </Row>
            <Row containerStyle={productDescWrapper}>
                <Text>{desc}</Text>
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
            <RBSheet
                ref={bottomSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                customStyles={{container: {height: screenHeight*0.25}}}
            >
                <ProductFooter />
            </RBSheet>
        </View>
    )
}

export default ProductPage