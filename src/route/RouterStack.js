import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import CartPage from "../page/cart/Cart";
import Navbar from "./TabRouter";
import ProductPage from "../page/product/Product";
import RegisterPage from "../page/register/Register";
import LoginPage from "../page/login/Login";
import { useStore } from "../global_store/useStore";
import { observer } from "mobx-react-lite";
import LandingPage from "../page/landing/Landing";

const RootStack = createStackNavigator()

export const RootStackScreen = observer(() => {
    
    const authStore = useStore().authStore

    return (
        <RootStack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            {authStore.email ? 
                <RootStack.Screen name="Home" component={HomeStackScreen} /> :
                <RootStack.Screen name="Auth" component={AuthStackScreen} />
            }   
        </RootStack.Navigator>
    )
})

const HomeStack = createStackNavigator()

export const HomeStackScreen = () => (
    <HomeStack.Navigator
        screenOptions={{
            headerShown: false
        }}>
        <HomeStack.Screen name='Home' component={Navbar} />
        <HomeStack.Screen name='Cart' component={CartPage} />
        <HomeStack.Screen name='Product' component={ProductPage} />
        <HomeStack.Screen name="SignIn" component={LoginPage} />
        <HomeStack.Screen name="SignOut" component={RegisterPage} />
    </HomeStack.Navigator>
)

const AuthStack = createStackNavigator()

export const AuthStackScreen = () => (
    <AuthStack.Navigator
        screenOptions={{
            headerShown: false
        }}>
        <AuthStack.Screen name="Landing" component={LandingPage} />
        <AuthStack.Screen name="SignIn" component={LoginPage} />
        <AuthStack.Screen name="SignOut" component={RegisterPage} />
    </AuthStack.Navigator>
)