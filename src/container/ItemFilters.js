import React from 'react';
import PropTypes from 'prop-types';
import {
	View, Text, StyleSheet
} from 'react-native';

import { CustomIcon } from './CustomIcon';
import { colors } from '../constants/colors';

const styles = StyleSheet.create({
	container: {
		height: 100,
		width: '100%',
		padding: 10
	},
	header: {
		height: 44,
		alignItems: 'center',
		flexDirection: 'row'
	},
	textHeader: {
		fontSize: 16,
		fontStyle: 'normal',
		fontWeight: '700',
		letterSpacing: 0.2,
		marginLeft: 7
	},
	contentSlider: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	viewSlider: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		padding: 5
	},
	textSlider: {
		fontStyle: 'normal',
		color: colors.bodyText,
		fontSize: 14,
		fontWeight: '600',
		lineHeight: 22
	}
});

const ItemFilters = React.memo(({
	iconName,
	iconSize,
	title,
	valueLeft,
	valueRight,
	children
}) => (
	<View style={styles.container}>
		<View style={styles.header}>
			<CustomIcon name={iconName} size={iconSize} color={colors.defaultColor} />
			<Text style={styles.textHeader} numberOfLines={1}>{title}</Text>
		</View>

		<View style={styles.contentSlider}>
			{
				valueLeft && valueRight ? (
					<View style={styles.viewSlider}>
						<Text style={styles.textSlider}>{valueLeft}</Text>
						<Text style={styles.textSlider}>{valueRight}</Text>
					</View>
				) : null
			}
			{children}
		</View>
	</View>
));

export default ItemFilters;

ItemFilters.propTypes = {
	iconName: PropTypes.string,
	iconSize: PropTypes.number,
	children: PropTypes.object,
	title: PropTypes.string,
	valueLeft: PropTypes.string,
	valueRight: PropTypes.string
};
