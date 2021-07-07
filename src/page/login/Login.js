import { Text, View } from "react-native"
import React, { useState } from 'react'
import { colorStyle, layoutStyle } from "../../style/globalStyle"
import { background, formContainer, input, loginContainer, loginPage, loginTitle, otherLoginContainer } from "./style"
import { Button, Input } from "react-native-elements"
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5"
import { facebook } from "../../style/variables"
import { useStore } from "../../global_store/useStore"
import { isSomeInvalidValue } from "../../function/global"
import { onFacebookButtonPress } from "../../services/facebook.service"

const LoginPage = () => {

    const authStore = useStore().authStore

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleLogin = () => {
        if (!isSomeInvalidValue(email) && !isSomeInvalidValue(password))
            authStore.login(email, password)
        else 
            console.log('Invalid value')
    }

    const handleLoginFacebook = () => onFacebookButtonPress().then(() => console.log('facebook signed in!'))
    

    return (
        <View style={loginPage}>
            <View style={background}>
                <Text style={loginTitle}>เข้าสู่ระบบด้วย Email</Text>
            </View>
            <View style={loginContainer}>
                <View style={formContainer}>
                    <Input
                        label="อีเมล"
                        placeholder="email@address.com"
                        leftIcon={<FontAwesome5Icon name="user-alt" />}
                        onChange={e => setEmail(e.nativeEvent.text)}
                        style={input}
                    />
                    <Input
                        label="รหัสผ่าน"
                        placeholder="password"
                        leftIcon={<FontAwesome5Icon name="key" />}
                        secureTextEntry
                        onChange={e => setPassword(e.nativeEvent.text)}
                        style={input}
                    />
                    <Button title="Login" onPress={handleLogin} buttonStyle={[colorStyle.darkPinkBG]} />
                </View>
                <Text style={[layoutStyle.verMargin10]}>หรือเข้าใช้ด้วยช่องทางอื่น</Text>
                <View style={otherLoginContainer}>
                    <FontAwesome5Icon name="facebook-square" size={40} color={facebook} onPress={handleLoginFacebook} />
                </View>
            </View>
        </View>
    )
}

export default LoginPage