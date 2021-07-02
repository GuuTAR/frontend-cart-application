import React, { useLayoutEffect } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from "../page/home/Home";
import CartPage from "../page/cart/Cart";
import Navbar from "./TabRouter";

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
        </HomeStack.Navigator>
    )
}