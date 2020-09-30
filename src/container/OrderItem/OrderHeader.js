import React from 'react';
import PropTypes from 'prop-types';
import {
	View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity
} from 'react-native';

import { colors } from '../../constants/colors';
import { CustomIcon } from '../CustomIcon';

const styles = StyleSheet.create({
	cardBg: {
		width: '100%'
	},
	cardBgLeft: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		flexDirection: 'row'
	},
	cardBgRight: {
		width: '100%',
		justifyContent: 'flex-end',
		alignItems: 'flex-end'
	},
	iconRight: {
		width: 65,
		height: 39,
		borderRadius: 4,
		margin: 10
	},
	buttonHeart: {
		height: 40,
		width: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
		marginRight: 15
	},
	featured: {
		padding: 10,
		borderRadius: 4,
		backgroundColor: colors.defaultColor,
		textAlign: 'center',
		margin: 5,
		color: colors.whiteColor,
		marginTop: 15
	}
});

const OrderHeader = React.memo(({
	height,
	featured,
	heart,
	icon,
	image,
	onPressHeart
}) => (
	<ImageBackground
		style={[styles.cardBg, { height: height / 2 }]}
		source={{ uri: image }}
		resizeMode='cover'
	>
		<View style={[styles.cardBgLeft, { height: height / 4 }]}>
			<Text style={[styles.featured, { marginLeft: 15 }]}>{featured?.point}</Text>
			<Text style={styles.featured}>{featured?.text}</Text>
		</View>
		<View style={[styles.cardBgRight, { height: height / 4 }]}>
			<TouchableOpacity style={styles.buttonHeart} onPress={onPressHeart}>
				<CustomIcon
					size={30}
					name={heart ? 'ic-heart2' : 'ic-heart'}
					color={heart ? colors.defaultColor : colors.whiteColor}
				/>
			</TouchableOpacity>
			<Image source={{ uri: icon }} style={styles.iconRight} />
		</View>
	</ImageBackground>
));

export default OrderHeader;

OrderHeader.propTypes = {
	icon: PropTypes.string,
	image: PropTypes.string,
	heart: PropTypes.bool,
	height: PropTypes.number,
	featured: PropTypes.object,
	onPressHeart: PropTypes.func
};
