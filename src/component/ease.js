import React from 'react';
import { StyleSheet, Animated, Easing, ScrollView , View, TouchableOpacity, Text } from 'react-native';


export const SampleEasing = (props) => {
	const animatedValue = new Animated.Value(0);
	const animate = (easing) => {
		animatedValue.setValue(0)
		Animated.timing(
			animatedValue,
			{
				toValue: 1,
				duration: 1000,
				easing
			}
		).start()
	}
	const marginLeft = animatedValue.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 260]
	})
	return (
		<View style={styles.container}>
			<Animated.View style={[styles.block, { marginLeft }]} />
			<ScrollView>
				<Text style={{ textAlign: 'center' }}>Scroll up for more animations</Text>
				<Button easing='Bounce' onPress={() => animate( Easing.bounce)} />
				<Button easing='Cubic' onPress={() => animate( Easing.cubic)} />
				<Button easing='Back' onPress={() => animate( Easing.back(2))} />
				<Button easing='Elastic' onPress={() => animate( Easing.elastic(2))} />
				<Button easing='Ease' onPress={() => animate( Easing.ease)} />
				<Button easing='InOut' onPress={() => animate( Easing.inOut(Easing.quad))} />
				<Button easing='In' onPress={() => animate( Easing.in(Easing.quad))} />
				<Button easing='Out' onPress={() => animate( Easing.out(Easing.quad))} />
				<Button easing='Sin' onPress={() => animate( Easing.sin)} />
				<Button easing='Linear' onPress={() => animate( Easing.linear)} />
				<Button easing='Quad' onPress={() => animate( Easing.quad)} />
			</ScrollView>
		</View>
	);
}

const Button = ({ onPress, easing }) => (
	<TouchableOpacity style={styles.button} onPress={onPress}>
		<Text>{easing}</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 60
	},
	button: {
		height: 60,
		marginLeft: 10,
		marginRight: 10,
		backgroundColor: '#ededed',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10
	},
	block: {
		width: 50,
		height: 50,
		backgroundColor: 'red'
	}
})