import React from 'react';
import PropTypes from 'prop-types';
import {
	View, Text, StyleSheet
} from 'react-native';

import { colors } from '../../constants/colors';
import { CustomIcon } from '../CustomIcon';

const styles = StyleSheet.create({
	cardInfo: {
		width: '100%',
		padding: 5
	},
	cardSubInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		margin: 3,
		width: '90%'
	},
	textSubInfo: {
		fontSize: 12,
		fontWeight: '600',
		marginLeft: 5,
		color: colors.bodyText
	},
	cardTitleInfo: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row'
	},
	textTitleInfo: {
		fontSize: 16,
		color: colors.defaultColor,
		fontWeight: '700',
		marginLeft: 5,
		margin: 12
	},
	aud: {
		fontSize: 12,
		fontWeight: '600',
		color: colors.auxiliaryColor,
		textAlign: 'right'
	},
	amout: {
		right: 0,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	textAmout: {
		fontSize: 16,
		color: colors.defaultColor,
		fontWeight: '700',
		marginRight: 5
	}
});

const OrderInfo = React.memo(({
	title,
	money,
	coordinate = {},
	subTitle
}) => (
	<View style={styles.cardInfo}>
		<View style={styles.cardTitleInfo}>
			<Text style={styles.textTitleInfo}>{title}</Text>
			<View style={styles.amout}>
				<Text style={styles.textAmout}>{money}</Text>
				<Text style={styles.aud}>AUD</Text>
			</View>
		</View>
		<View style={styles.cardSubInfo}>
			<CustomIcon
				size={20}
				name='ic-pinmap'
				color={colors.defaultColor}
			/>
			<Text style={styles.textSubInfo} numberOfLines={1}>{coordinate?.nearbyText}</Text>
		</View>
		<View style={styles.cardSubInfo}>
			<CustomIcon
				size={20}
				name='ic-moneyflower'
				color={colors.defaultColor}
			/>
			<Text style={styles.textSubInfo} numberOfLines={1}>{subTitle}</Text>
		</View>
	</View>
));

export default OrderInfo;

OrderInfo.propTypes = {
	title: PropTypes.string,
	subTitle: PropTypes.string,
	money: PropTypes.number,
	coordinate: PropTypes.object
};
