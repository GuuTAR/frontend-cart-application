import { ScrollView, View } from "react-native"
import React from "react"
import { cartPage, productContainer } from "./style"
import ProductCard from "./component/productCard/ProductCard"
import CartFooter from "./component/footer/CartFooter"
import Header from "../../component/header/Header"

const CartPage = ({navigation}) => {

    const handleGoBack = () => navigation.goBack()

    return (
        <View style={cartPage}>
            <Header goBack={handleGoBack} title="My Cart" />
            <ScrollView>
                <View style={productContainer}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </View>
            </ScrollView>
            <CartFooter />
        </View>
    )
}

export default CartPage