import React, { useEffect } from 'react';
import { StyleSheet, Animated, Easing, ScrollView, View, TouchableOpacity, Text } from 'react-native';


export const AnimationParallel = (props) => {
    const animatedValue1 = new Animated.Value(0);
    const animatedValue2 = new Animated.Value(0);
    const animatedValue3 = new Animated.Value(0);
    useEffect(() => {
        animate();
    }, [])
    const animate = (easing) => {
        animatedValue1.setValue(0);
        animatedValue2.setValue(0);
        animatedValue3.setValue(0);
        const createAnimation = (value, duration, easing, delay = 0, ) => {
            return Animated.timing(
                value, {
                toValue: 1,
                duration,
                delay,
                easing,
            }
            )
        }
        Animated.parallel([
            createAnimation(animatedValue1, 2000, Easing.ease),
            createAnimation(animatedValue2, 1000, Easing.ease, 1000),
            createAnimation(animatedValue3, 1000, Easing.ease, 2000),
        ]).start()
    }
    const scaleText = animatedValue1.interpolate({
        inputRange: [0, 1],
        outputRange: [0.5, 2]
    })
    const spinText = animatedValue2.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '720deg']
    })
    const introButton = animatedValue3.interpolate({
        inputRange: [0, 1],
        outputRange: [-100, 500]
    })

    return (
        <View style={[styles.container]}>
            <Animated.View
                style={{ transform: [{ scale: scaleText }] }}>
                <Text>Welcome</Text>
            </Animated.View>
            <Animated.View
                style={{ marginTop: 20, transform: [{ rotate: spinText }] }}>
                <Text
                    style={{ fontSize: 20 }}>
                    to the App!
                </Text>
            </Animated.View>
            <Animated.View
                style={{ top: introButton, position: 'absolute' }}>
                <TouchableOpacity
                    onPress={animate}
                    style={styles.button}>
                    <Text
                        style={{ color: 'white', fontSize: 20 }}>
                        Click Here To Start
                    </Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: "blue"
    }
})