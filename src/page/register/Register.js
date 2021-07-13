import { Text, View, Animated } from "react-native"
import React, { useState, useRef } from "react"
import { background, formContainer, inputContainer, registerButton, registerContainer, registerPage, registerTitle, errorText, errorCheckbox } from "./style"
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5"
import { Button, CheckBox, Input } from "react-native-elements"
import { useStore } from "../../mobx/useStore"
import { isSomeInvalidValue } from "../../function/global"
import ShakeButton from '../../component/ShakeButton/ShakeButton'
import { shakeElement } from '../../animation/global'

const RegisterPage = () => {

    const shakePosition = useRef(new Animated.Value(0)).current

    const { register } = useStore().authStore

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [rePassword, setRePassword] = useState()
    const [policyCheck, setPolicyCheck] = useState(false)

    const [registering, setRegistering] = useState(false)

    const [form, setForm] = useState({
        email: {
            error: false,
            msg: ""
        },
        password: {
            error: false,
            msg: ""
        },
        rePassword: {
            error: false,
            msg: ""
        },
        policyCheck: {
            error: false,
            msg: ""
        },
    })

    const setErrorMsg = (type, msg) => {
        setRegistering(false)
        switch (type) {
            case 'email':
                setForm(form => ({ ...form, email: { error: true, msg } }))
                return
            case 'password':
                setForm(form => ({ ...form, password: { error: true, msg } }))
                return
            case 'rePassword':
                setForm(form => ({ ...form, rePassword: { error: true, msg } }))
                return
            case 'policyCheck':
                setForm(form => ({ ...form, policyCheck: { error: true, msg } }))
                return
            default:
                return
        }
    }

    const handleRegister = () => {
        setRegistering(true)
        if (!isSomeInvalidValue(email) && !isSomeInvalidValue(password) && password === rePassword && policyCheck)
            register(email, password, setErrorMsg)
        else {
            shakeElement(shakePosition)
            if (isSomeInvalidValue(email))
                setErrorMsg("email", "This field is required.")
            if (isSomeInvalidValue(password))
                setErrorMsg("password", "This field is required.")
            if (isSomeInvalidValue(rePassword))
                setErrorMsg("rePassword", "This field is required.")
            if (password !== rePassword)
                setErrorMsg("rePassword", "Password doesn't match.")
            if (!policyCheck)
                setErrorMsg("policyCheck", "You must accept policy.")
        }
    }

    const handleChange = (type, value) => {
        switch (type) {
            case 'email':
                setForm(form => ({ ...form, email: { error: false, msg: "" } }))
                setEmail(value)
                return
            case 'password':
                setForm(form => ({ ...form, password: { error: false, msg: "" }, rePassword: { error: false, msg: "" } }))
                setPassword(value)
                return
            case 'rePassword':
                setForm(form => ({ ...form, rePassword: { error: false, msg: "" } }))
                setRePassword(value)
                return
            case 'policyCheck':
                setForm(form => ({ ...form, policyCheck: { error: false, msg: "" } }))
                setPolicyCheck(value)
                return
            default:
                return
        }
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
                        onChange={e => handleChange('email', e.nativeEvent.text)}
                        containerStyle={inputContainer}
                    />
                    {form.email.error && <Text style={errorText}>{form.email.msg}</Text>}
                    <Input
                        label="รหัสผ่าน"
                        placeholder="password"
                        leftIcon={<FontAwesome5Icon name="key" />}
                        secureTextEntry
                        onChange={e => handleChange('password', e.nativeEvent.text)}
                        containerStyle={inputContainer}
                        renderErrorMessage={false}
                    />
                    {form.password.error && <Text style={errorText}>{form.password.msg}</Text>}
                    <Input
                        label="ยืนยันรหัสผ่าน"
                        placeholder="re-password"
                        leftIcon={<FontAwesome5Icon name="key" />}
                        secureTextEntry
                        onChange={e => handleChange('rePassword', e.nativeEvent.text)}
                        containerStyle={inputContainer}
                        renderErrorMessage={false}
                    />
                    {form.rePassword.error && <Text style={errorText}>{form.rePassword.msg}</Text>}
                    <CheckBox
                        title='ยอมรับเงื่อนไข รายละเอียดเพิ่มเติม'
                        checked={policyCheck}
                        onPress={() => handleChange('policyCheck', !policyCheck)}
                        textStyle={form.policyCheck.error && errorCheckbox}
                    />
                    {registering ?
                        <Button title="ยืนยัน" buttonStyle={registerButton} onPress={handleRegister} loading /> :
                        <ShakeButton title="ยืนยัน" buttonStyle={registerButton} onPress={handleRegister} animateRef={shakePosition} />}
                </View>
            </View>
        </View>
    )
}

export default RegisterPage