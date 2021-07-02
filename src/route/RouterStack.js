import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import CartPage from "../page/cart/Cart";
import Navbar from "./TabRouter";
import ProductPage from "../page/product/Product";

const RootStack = createStackNavigator()

export const RootStackScreen = () => (
    <RootStack.Navigator
        screenOptions={{
            headerShown: false
        }}>
        <RootStack.Screen name="Home" component={HomeStackScreen} />
    </RootStack.Navigator>
)

const HomeStack = createStackNavigator()

export const HomeStackScreen = ({ navigation }) => {

    const hideTab = () => navigation.setOptions({tabBarVisible: false})
    const showTab = () => navigation.setOptions({tabBarVisible: true})

    return (
        <HomeStack.Navigator
            
            screenOptions={{
                headerShown: false
            }}>
            <HomeStack.Screen name='Home' component={Navbar} />
            <HomeStack.Screen name='Cart' component={CartPage} />
            <HomeStack.Screen name='Product' component={ProductPage} />
        </HomeStack.Navigator>
    )
}