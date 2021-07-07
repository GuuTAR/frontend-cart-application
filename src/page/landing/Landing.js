import { Text, View } from "react-native"
import React from "react"
import { background, landingPage, landingTitle, menu, menuContainer, signInButton, signOutButton, signOutText } from "./style"
import { Button } from "react-native-elements"

const LandingPage = ({navigation}) => {

    const navSignIn = () => navigation.push('SignIn')
    const navSignOut = () => navigation.push('SignOut')

    return (
        <View style={landingPage}>
            <View style={background} />
            <View style={menuContainer}>
                <View style={menu}>
                    <Text style={landingTitle}>ยินดีต้อนรับสู่แอพ XXXX</Text>
                    <Button title="Sign In" buttonStyle={signInButton} onPress={() => navSignIn()} />
                    <Button title="Sign Up" buttonStyle={signOutButton} titleStyle={signOutText} onPress={navSignOut}  />
                </View>
            </View>
        </View>
    )
}

export default LandingPage