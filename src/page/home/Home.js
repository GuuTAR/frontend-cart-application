import { ScrollView, Text, View } from "react-native"
import React, { useState } from "react"
import { colorStyle, layoutStyle } from "../../style/globalStyle"
import ProductCard from "./component/productCard/ProductCard"
import { cartIcon, homePage, input, productContainer, searchBar, searchContainer } from "./style"
import AntDesign from 'react-native-vector-icons/AntDesign'
import { SearchBar } from "react-native-elements"
import Row from "../../component/Row"
import { observer } from "mobx-react-lite"
import { useStore } from "../../global_store/useStore"

const HomePage = observer(({navigation}) => {

    const { getHomeProducts, changeKeyword } = useStore().homeStore

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
        <View style={homePage}>
            <Row containerStyle={[searchBar, scroll && colorStyle.darkPinkBG]}>
                <SearchBar
                    placeholder="ค้นหา..."
                    containerStyle={[searchContainer, layoutStyle.row]}
                    inputStyle={[input]}
                    platform="android"
                    onChangeText={changeKeyword}
                />
                <AntDesign name="shoppingcart" size={30} onPress={goCartPage} style={cartIcon} />
            </Row> 
            <ScrollView style={{marginBottom: 66}} 
                onScroll={handleScroll} 
                showsVerticalScrollIndicator={false}
            >
                <Row containerStyle={productContainer}>
                    {getHomeProducts().length > 0 ? 
                        getHomeProducts().map(renderProductCard) : 
                        <Text>ไม่มีสินค้าที่ตรงตามเงื่อนไขดังกล่าว</Text>}
                </Row>
            </ScrollView>
        </View>
    )
})

export default HomePage