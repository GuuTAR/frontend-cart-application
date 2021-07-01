import { Text, View } from "react-native"
import * as React from 'react'
import { colorStyle, layoutStyle } from "../../style/globalStyle"
import { background, formContainer, input, loginContainer, loginPage, loginTitle, otherLoginContainer } from "./style"
import { Button, Input } from "react-native-elements"
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5"
import { facebook } from "../../style/variables"

const LoginPage = () => {
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
                        style={input}
                    />
                    <Input
                        label="รหัสผ่าน"
                        placeholder="password"
                        leftIcon={<FontAwesome5Icon name="key" />}
                        secureTextEntry
                        style={input}
                    />
                    <Button title="Login" buttonStyle={[colorStyle.darkPinkBG]} />
                </View>
                <Text style={[layoutStyle.verMargin10]}>หรือเข้าใช้ด้วยช่องทางอื่น</Text>
                <View style={otherLoginContainer}>
                    <FontAwesome5Icon name="facebook-square" size={40} color={facebook} />
                </View>
            </View>
        </View>
    )
}

export default LoginPage