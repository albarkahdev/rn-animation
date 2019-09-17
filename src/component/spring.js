import React from 'react';
import { StyleSheet, Animated, View, Text } from 'react-native';


export const AnimationSpring = (props) => {
    const springValue = new Animated.Value(0.3);
    const spring = (easing) => {
        springValue.setValue(0.3)
        Animated.spring(
            springValue,
            {
                toValue: 1,
                friction: 1
            }
        ).start()
    }

    return (
        <View style={styles.container}>
            <Text
                style={{ marginBottom: 100 }}
                onPress={spring}>Spring</Text>
            <Animated.Image
                style={{ width: 227, height: 277, resizeMode: "contain", transform: [{ scale: springValue }] }}
                source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})