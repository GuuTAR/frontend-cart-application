import { ScrollView, View } from "react-native"
import React, { useLayoutEffect, useState } from "react"
import { colorStyle, layoutStyle } from "../../style/globalStyle"
import ProductCard from "./component/productCard/ProductCard"
import { cartIcon, input, productContainer, searchBar, searchContainer } from "./style"
import AntDesign from 'react-native-vector-icons/AntDesign'
import { SearchBar } from "react-native-elements"
import Row from "../../component/Row"
import { homeProduct } from '../../mockup/home'

const HomePage = ({navigation}) => {

    const [scroll, setScroll] = useState(false)

    const handleScroll = (e) => {
        if (e.nativeEvent.contentOffset.y > 180) setScroll(true)
        else setScroll(false)
    }

    const goCartPage = () => navigation.push('Cart')
    const goProductPage = (data) => navigation.push('Product', data)

    const renderProductCard = (product, idx) => (idx === 0 ? 
        <ProductCard key={idx} first goProductPage={goProductPage} product={product} /> : 
        <ProductCard key={idx} goProductPage={goProductPage} product={product} />) 

    return (
        <View style={[colorStyle.grayBG]}>
            <Row containerStyle={[searchBar, scroll && colorStyle.darkPinkBG]}>
                <SearchBar
                    placeholder="ค้นหา..."
                    containerStyle={[searchContainer, layoutStyle.row]}
                    inputStyle={[input]}
                    platform="android"
                />
                <AntDesign name="shoppingcart" size={30} onPress={goCartPage} style={cartIcon} />
            </Row> 
            <ScrollView style={{marginBottom: 66}} 
                onScroll={handleScroll} 
                showsVerticalScrollIndicator={false}
            >
                <Row containerStyle={productContainer}>
                    {homeProduct.map(renderProductCard)}
                </Row>
            </ScrollView>
        </View>
    )
}

export default HomePage