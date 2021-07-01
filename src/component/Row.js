import { View } from "react-native"
import * as React from "react"
import { layoutStyle } from "../style/globalStyle"

const Row = ({children, containerStyle = []}) => {
    return (
        <View style={[layoutStyle.row, containerStyle]}>
            {children}
        </View>
    )
}

export default Row