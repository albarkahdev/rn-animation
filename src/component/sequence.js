import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView, Animated, View } from 'react-native';

const arr = []
for (var i = 0; i < 500; i++) {
    arr.push(i)
}

export const AnimationSequence = (props) => {
    const animatedValue = [];
    arr.forEach((value) => animatedValue[value] = new Animated.Value(0));
    useEffect(() => {
        animate();
    }, []);
    const animate = (easing) => {
        const animations = arr.map(value => {
            return Animated.timing(
                animatedValue[value],
                {
                    toValue: 1,
                    duration: 50
                }
            )
        })
        Animated.sequence(animations).start()
    };
    const animations = arr.map((a, i) => {
        return <Animated.View key={i} style={{ opacity: animatedValue[a], height: 20, width: 20, backgroundColor: 'red', marginLeft: 3, marginTop: 3 }} />
    });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                {animations}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});
