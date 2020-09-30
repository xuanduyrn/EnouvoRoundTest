import React from 'react';
import PropTypes from 'prop-types';
import {
	Text, TouchableOpacity, StyleSheet, Image, ImageBackground, Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../constants/colors';

const { width: WIDTH_SCREEN, height: HEIGHT_SCREEM } = Dimensions.get('screen');

const styles = StyleSheet.create({
	container: {
		width: WIDTH_SCREEN,
		alignItems: 'center',
		height: HEIGHT_SCREEM
	},
	button: {
		width: '90%',
		borderRadius: 4,
		backgroundColor: colors.defaultColor,
		margin: '2%',
		height: 48,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 14,
		fontWeight: '700',
		color: colors.whiteColor
	},
	logo: {
		width: 150,
		height: 150,
		margin: 30
	}
});

class HomeView extends React.Component {
	static propTypes = {
		navigation: PropTypes.object
	}

	static navigationOptions = () => ({
		headerShown: false
	})

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { navigation } = this.props;
		return (
			<SafeAreaView style={styles.container}>
				<ImageBackground
					source={require('../assets/logo/bg.jpg')}
					style={styles.container}
					resizeMode='cover'
				>
					<Image source={require('../assets/logo/enouvo.png')} style={styles.logo} />
					<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Search')}>
						<Text style={styles.text}>Search Filters</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Maps')}>
						<Text style={styles.text}>Maps</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Applications')}>
						<Text style={styles.text}>Application</Text>
					</TouchableOpacity>
				</ImageBackground>
			</SafeAreaView>
		);
	}
}

export default HomeView;
