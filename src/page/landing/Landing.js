import { Text, View } from "react-native"
import React from "react"
import { background, landingPage, landingTitle, menu, menuContainer, signInButton, signOutButton, signOutText } from "./style"
import { Button } from "react-native-elements"

const LandingPage = () => {
    return (
        <View style={landingPage}>
            <View style={background} />
            <View style={menuContainer}>
                <View style={menu}>
                    <Text style={landingTitle}>ยินดีต้อนรับสู่แอพ XXXX</Text>
                    <Button title="Sign In" buttonStyle={signInButton} />
                    <Button title="Sign Out" buttonStyle={signOutButton} titleStyle={signOutText} />
                </View>
            </View>
        </View>
    )
}

export default LandingPage