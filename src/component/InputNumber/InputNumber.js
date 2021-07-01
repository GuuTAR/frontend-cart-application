import * as React from "react"
import Row from "../Row"
import { TextInput } from "react-native"
import { colorStyle } from "../../style/globalStyle"
import { Button } from "react-native-elements"
import { useState } from "react"
import { gray } from "../../style/variables"
import { button, input } from "./style"

const InputNumber = ({min, max, defaultValue}) => {

    const [value, setValue] = useState(defaultValue || 1)

    const handleMinusOne = () => setValue(min ? (value <= min ? value : value-1) : value-1)
    const handlePlusOne = () => setValue(max ? (value >= max ? value : value+1) : value+1)

    return (
        <Row>
            <Button title="-" buttonStyle={button} onPress={handleMinusOne} />
            <TextInput value={value.toString()} style={input} />
            <Button title="+" buttonStyle={button} onPress={handlePlusOne} />
        </Row>
    )
}

export default InputNumber