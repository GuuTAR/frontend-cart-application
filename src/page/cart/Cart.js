import { ScrollView, View } from "react-native"
import React, { useLayoutEffect } from "react"
import { cartPage, productContainer } from "./style"
import CartHeader from "./component/header/CartHeader"
import ProductCard from "./component/productCard/ProductCard"
import CartFooter from "./component/footer/CartFooter"

const CartPage = ({navigation}) => {

    const handleGoBack = () => navigation.goBack()

    return (
        <View style={cartPage}>
            <CartHeader goBack={handleGoBack} />
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