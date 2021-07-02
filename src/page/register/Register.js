import { Text, View } from "react-native"
import React from "react"
import { background, formContainer, registerButton, registerContainer, registerPage, registerTitle } from "./style"
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5"
import { Button, CheckBox, Input } from "react-native-elements"

const RegisterPage = () => {
    return (
        <View style={registerPage}>
            <View style={background}>
                <Text style={registerTitle}>สมัครสมาชิก</Text>
            </View>
            <View style={registerContainer}>
                <View style={formContainer}>
                    <Input
                        label="อีเมล"
                        placeholder="email@address.com"
                        leftIcon={<FontAwesome5Icon name="user-alt" />}
                    />
                    <Input
                        label="รหัสผ่าน"
                        placeholder="password"
                        leftIcon={<FontAwesome5Icon name="key" />}
                        secureTextEntry
                    />
                    <Input
                        label="ยืนยันรหัสผ่าน"
                        placeholder="re-password"
                        leftIcon={<FontAwesome5Icon name="key" />}
                        secureTextEntry
                    />
                    <CheckBox
                        title='ยอมรับเงื่อนไข รายละเอียดเพิ่มเติม'
                        checked={false}
                    />
                    <Button title="ยืนยัน" buttonStyle={registerButton} />
                </View>
            </View>
        </View>
    )
}

export default RegisterPage