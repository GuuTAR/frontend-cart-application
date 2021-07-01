import { ScrollView, Text, View } from "react-native"
import * as React from "react"
import { colorStyle, layoutStyle } from "../../style/globalStyle"
import ProductCard from "./component/productCard/ProductCard"
import { productContainer, searchBar, style } from "./style"
import AntDesign from 'react-native-vector-icons/AntDesign'
import { SearchBar } from "react-native-elements"
import Col from "../../component/Col"
import Row from "../../component/Row"

const HomePage = () => {

    const [scroll, setScroll] = React.useState(false)

    return (
        <View style={[colorStyle.grayBG]}>
            <Row containerStyle={[searchBar, scroll && colorStyle.darkPinkBG]}>
                <SearchBar
                    placeholder="ค้นหา..."
                    containerStyle={[style.search, layoutStyle.row]}
                    inputStyle={[style.input]}
                    platform="android"
                />
                <AntDesign name="shoppingcart" size={30} />
            </Row>
            <ScrollView style={{marginBottom: 66}} 
                onScrollBeginDrag={() => setScroll(true)} 
                onMomentumScrollEnd={() => setScroll(false)}
            >
                <Col containerStyle={productContainer}>
                    <ProductCard first />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </Col>
            </ScrollView>
        </View>
    )
}

export default HomePage