import { Text } from "react-native"
import * as React from "react"
import { backButton, backButtonTitle, headerContainer, headerTitle } from "./style"
import Row from '../Row'
import { Button } from "react-native-elements" 

const Header = ({goBack, title}) => {
    return (
        <Row containerStyle={headerContainer}> 
            <Button title="<" buttonStyle={backButton} titleStyle={backButtonTitle} onPress={() => goBack()} />
            <Text style={headerTitle}>{title}</Text>
        </Row>
    )
}

export default Header