import { Text, View } from "react-native"
import * as React from 'react'
import { colorStyle, layoutStyle } from "../../style/globalStyle"
import { style } from "./style"
import { Button, Input } from "react-native-elements"
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5"
import { facebook } from "../../style/variables"

const LoginPage = () => {
    return (
        <View style={[colorStyle.grayBG, style.loginPage]}>
            <View style={[style.background, colorStyle.darkPinkBG, layoutStyle.center]}>
                <Text style={[style.title, colorStyle.whiteText]}>เข้าสู่ระบบด้วย Email</Text>
            </View>
            <View style={[layoutStyle.center, style.loginContainer]}>
                <View style={[colorStyle.whiteBG, style.formContainer,]}>
                    <Input
                        label="อีเมล"
                        placeholder="email@address.com"
                        leftIcon={<FontAwesome5Icon name="user-alt" />}
                        style={[style.input]}
                    />
                    <Input
                        label="รหัสผ่าน"
                        placeholder="password"
                        leftIcon={<FontAwesome5Icon name="key" />}
                        secureTextEntry
                        style={[style.input]}
                    />
                    <Button title="Login" buttonStyle={[colorStyle.darkPinkBG]} />
                </View>
                <Text style={[layoutStyle.verMargin10]}>หรือเข้าใช้ด้วยช่องทางอื่น</Text>
                <View style={[colorStyle.whiteBG, style.otherLoginContainer, layoutStyle.center]}>
                    <FontAwesome5Icon name="facebook-square" size={40} color={facebook} />
                </View>
            </View>
        </View>
    )
}

export default LoginPage