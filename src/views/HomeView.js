import React from 'react';
import PropTypes from 'prop-types';
import {
	Text, TouchableOpacity, StyleSheet
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../constants/colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.backgroundColor,
		justifyContent: 'center',
		alignItems: 'center'
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
	}
});

const HomeView = React.memo(({
	navigation
}) => (
	<SafeAreaView style={styles.container}>
		<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Search')}>
			<Text style={styles.text}>Search Filters</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Maps')}>
			<Text style={styles.text}>Maps</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Applications')}>
			<Text style={styles.text}>Application</Text>
		</TouchableOpacity>
	</SafeAreaView>
));

export default HomeView;

HomeView.propTypes = {
	navigation: PropTypes.object
};
