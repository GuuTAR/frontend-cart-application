import { Text, View } from "react-native"
import * as React from "react"
import { layoutStyle } from "../style/globalStyle"

const Col = ({children, containerStyle = []}) => {
    return (
        <View style={[layoutStyle.col, containerStyle]}>
            {children}
        </View>
    )
}

export default Col