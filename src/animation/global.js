import { Animated } from 'react-native'

export const shakeElement = (ref) => {
    Animated.sequence([
        Animated.timing(ref, { toValue: 5, duration: 80, useNativeDriver: true }),
        Animated.timing(ref, { toValue: -5, duration: 80, useNativeDriver: true }),
        Animated.timing(ref, { toValue: 5, duration: 80, useNativeDriver: true }),
        Animated.timing(ref, { toValue: 0, duration: 80, useNativeDriver: true })
    ]).start()
}