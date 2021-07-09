import React from "react"
import { Button } from 'react-native-elements'
import { Animated } from 'react-native'

const ShakeButton = ({ title, buttonStyle = {}, onPress, animateRef}) => {
    return (
        <Animated.View
            style={{
                transform: [{ translateX: animateRef }]
            }}>
            <Button
                title={title}
                onPress={onPress}
                buttonStyle={buttonStyle} />
        </Animated.View>
    )
}

export default ShakeButton