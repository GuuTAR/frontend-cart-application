import { ScrollView, View } from "react-native"
import * as React from "react"
import { cartPage, productContainer } from "./style"
import CartHeader from "./component/header/CartHeader"
import ProductCard from "./component/productCard/ProductCard"
import CartFooter from "./component/footer/CartFooter"

const CartPage = () => {
    return (
        <View style={cartPage}>
            <CartHeader />
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