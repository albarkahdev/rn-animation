import React, { useEffect } from 'react';
import { StyleSheet, Animated, Easing, ScrollView , View, TouchableOpacity, Text } from 'react-native';


export const AnimationSpin = () => {
	const spinValue = new Animated.Value(0);
	useEffect(() => {
		spin();
	}, [])
	const spin = () => {
		spinValue.setValue(0);
		Animated.timing(
			spinValue,
			{
				toValue: 1,
				duration: 4000,
				easing: Easing.linear
			})
			.start(() => spin())
	}
	const spinInterpolate = spinValue.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '360deg']
	});
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Animated.Image
				style={{
					width: 277,
					height: 277,
					resizeMode: "contain",
					transform: [{ rotate: spinInterpolate }]
				}}
				source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }}
			/>
		</View>
	);
};
