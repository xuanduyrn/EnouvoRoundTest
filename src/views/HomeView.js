import React from 'react';
import PropTypes from 'prop-types';
import {
	Text, TouchableOpacity, StyleSheet, Image, ImageBackground, Dimensions, Platform
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
	request, check, PERMISSIONS, RESULTS
} from 'react-native-permissions';

import { colors } from '../constants/colors';

const { width: WIDTH_SCREEN, height: HEIGHT_SCREEN } = Dimensions.get('screen');

const styles = StyleSheet.create({
	container: {
		width: WIDTH_SCREEN,
		alignItems: 'center',
		height: HEIGHT_SCREEN
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

	checkGPS = (screenName) => {
		const { navigation } = this.props;
		check(
			Platform.select({
				android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
				ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
			})
		).then((result) => {
			switch (result) {
				case RESULTS.GRANTED:
					navigation.navigate(screenName);
					break;
				default:
					this.requestGPS(screenName);
					break;
			}
		}).catch((error) => {
			console.log(error);
		});
	}

	requestGPS = (screenName) => {
		const { navigation } = this.props;
		request(
			Platform.select({
				android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
				ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
			})
		).then((result) => {
			switch (result) {
				case RESULTS.GRANTED:
					navigation.navigate(screenName);
					break;
				default:
					break;
			}
		}).catch((error) => {
			console.log(error);
		});
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<ImageBackground
					source={require('../assets/logo/bg.jpg')}
					style={styles.container}
					resizeMode='cover'
				>
					<Image source={require('../assets/logo/enouvo.png')} style={styles.logo} />
					<TouchableOpacity style={styles.button} onPress={() => this.checkGPS('Search')}>
						<Text style={styles.text}>Search Filters</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => this.checkGPS('Maps')}>
						<Text style={styles.text}>Maps</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => this.checkGPS('Applications')}>
						<Text style={styles.text}>Application</Text>
					</TouchableOpacity>
				</ImageBackground>
			</SafeAreaView>
		);
	}
}

export default HomeView;
