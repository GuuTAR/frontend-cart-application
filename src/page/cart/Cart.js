import { ScrollView, View } from "react-native"
import React from "react"
import { cartPage, productContainer } from "./style"
import CartFooter from "./component/footer/CartFooter"
import Header from "../../component/header/Header"
import { useStore } from '../../mobx/useStore'
import ProductCard from "./component/productCard/ProductCard"
import { observer } from "mobx-react-lite"

const CartPage = observer(({navigation}) => {

    const { carts } = useStore().cartStore

    const handleGoBack = () => navigation.goBack()

    const renderProductCard = (product, idx) => <ProductCard key={idx} product={product} />

    return (
        <View style={cartPage}>
            <Header goBack={handleGoBack} title="My Cart" />
            <ScrollView>
                <View style={productContainer}>
                    {carts.map(renderProductCard)}
                </View>
            </ScrollView>
            <CartFooter totalProduct={carts.length} />
        </View>
    )
})

export default CartPage