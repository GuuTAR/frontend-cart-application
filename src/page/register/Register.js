import { Text, View } from "react-native"
import React, { useState } from "react"
import { background, formContainer, registerButton, registerContainer, registerPage, registerTitle } from "./style"
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5"
import { Button, CheckBox, Input } from "react-native-elements"
import { useStore } from "../../global_store/useStore"
import { isSomeInvalidValue } from "../../function/global"

const RegisterPage = () => {

    const { register } = useStore().authStore

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [rePassword, setRePassword] = useState()
    const [policyCheck, setPolicyCheck] = useState(false)

    const handleRegister = () => {
        if (!isSomeInvalidValue(email) && !isSomeInvalidValue(password) && password === rePassword && policyCheck)
            register(email, password)
    }

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
                        onChange={e => setEmail(e.nativeEvent.text)}
                    />
                    <Input
                        label="รหัสผ่าน"
                        placeholder="password"
                        leftIcon={<FontAwesome5Icon name="key" />}
                        secureTextEntry
                        onChange={e => setPassword(e.nativeEvent.text)}
                    />
                    <Input
                        label="ยืนยันรหัสผ่าน"
                        placeholder="re-password"
                        leftIcon={<FontAwesome5Icon name="key" />}
                        secureTextEntry
                        onChange={e => setRePassword(e.nativeEvent.text)}
                    />
                    <CheckBox
                        title='ยอมรับเงื่อนไข รายละเอียดเพิ่มเติม'
                        checked={policyCheck}
                        onPress={() => setPolicyCheck(!policyCheck)}
                    />
                    <Button title="ยืนยัน" buttonStyle={registerButton} onPress={handleRegister} />
                </View>
            </View>
        </View>
    )
}

export default RegisterPage