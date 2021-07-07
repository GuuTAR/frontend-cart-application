import * as React from "react"
import Row from "../Row"
import { TextInput } from "react-native"
import { Button } from "react-native-elements"
import { useState } from "react"
import { button, input } from "./style"

const InputNumber = ({min, max, defaultValue, setNumber}) => {

    const [value, setValue] = useState(defaultValue || 1)

    const handleMinusOne = () => {
        const result = min ? (value <= min ? value : value-1) : value-1
        setValue(result)
        setNumber(result)
    }
    const handlePlusOne = () => {
        const result = max ? (value >= max ? value : value+1) : value+1
        setValue(result)
        setNumber(result)
    }

    const handleChange = (text) => {
        if (parseInt(text) !== NaN && text.trim() !== '') {
            setValue(parseInt(text))
            setNumber(parseInt(text))
        }
    }
    
    const handleMinMaxAfterEditing = () => {
        if (value < min) setValue(min)
        else if (value > max) setValue(max)
    }

    return (
        <Row>
            <Button title="-" buttonStyle={button} onPress={handleMinusOne} />
            <TextInput 
                value={value.toString()} 
                onChangeText={handleChange} 
                keyboardType='number-pad' 
                onEndEditing={handleMinMaxAfterEditing}
                maxLength={3}
                style={input} 
            />
            <Button title="+" buttonStyle={button} onPress={handlePlusOne} />
        </Row>
    )
}

export default InputNumber