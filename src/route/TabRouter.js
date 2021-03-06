import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { colorStyle } from '../style/globalStyle'
import HomePage from '../page/home/Home'
import LandingPage from '../page/landing/Landing'
import ProfilePage from '../page/profile/Profile'

const Tab = createBottomTabNavigator()

const Navbar = ({route}) => {

    const getIcon = (route, focused, color, size) => {
        switch (route.name) {
            case "Home":
                return focused ?
                    <Entypo name="shop" size={20} style={[colorStyle.pinkText,]} /> :
                    <Entypo name="shop" size={20} style={[colorStyle.blackText,]} />
            case "Profile":
                return focused ?
                    <FontAwesome5 name="user" size={20} style={[colorStyle.pinkText,]} /> :
                    <FontAwesome5 name="user" size={20} style={[colorStyle.blackText,]} />
            default:
                return;
        }
    }

    const iconHandler = ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            return getIcon(route, focused, color, size)
        }
    })

    return (
        <Tab.Navigator screenOptions={iconHandler} >
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Profile" component={ProfilePage} />
        </Tab.Navigator>
    )
}

export default Navbar

