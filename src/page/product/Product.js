import { Dimensions, Image, ScrollView, Text, View } from "react-native"
import React, { useRef } from "react"
import { addToCartButton, horizontalView, imgWrapper, otherImg, otherImgText, productDescWrapper, productImg, productImgWrapper, productName, productNameWrapper, productPage } from "./style"
import Row from '../../component/Row'
import Header from '../../component/header/Header'
import ProductFooter from "./component/footer/Footer"
import RBSheet from "react-native-raw-bottom-sheet"
import AntDesign from 'react-native-vector-icons/AntDesign'

const screenHeight = Dimensions.get('screen').height

const ProductPage = ({ navigation, route }) => {

    const bottomSheet = useRef()

    const handleGoBack = () => navigation.goBack()
    const handleshowAddCart = () => bottomSheet.current.open()
    const handlehideAddCart = () => bottomSheet.current.close()

    const product = route.params

    return (
        <View style={productPage}>
            <Header title={product?.name || 'product'} goBack={handleGoBack} />
            <View style={productImgWrapper}>
                <Image source={{uri : product?.img}} style={productImg} />
                <AntDesign name="shoppingcart" style={addToCartButton} onPress={handleshowAddCart}/>
            </View>
            <Row containerStyle={productNameWrapper}>
                <Text style={productName}>{product?.name || 'product'}</Text>
            </Row>
            <Row containerStyle={productDescWrapper}>
                <Text>{product?.desc || 'ของดีเมืองอุทัย'}</Text>
            </Row>
            <Row containerStyle={productNameWrapper}>
                <Text style={otherImgText}>รูปสินค้าเพิ่มเติม</Text>
            </Row>
            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={horizontalView}
            >
                <Row containerStyle={imgWrapper}>
                    {<Text>ไม่มีรูปเพิ่มเติม</Text>}
                </Row>
            </ScrollView>
            <RBSheet
                ref={bottomSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                customStyles={{container: {height: screenHeight*0.25}}}
            >
                <ProductFooter product={product} hide={handlehideAddCart} />
            </RBSheet>
        </View>
    )
}

export default ProductPage