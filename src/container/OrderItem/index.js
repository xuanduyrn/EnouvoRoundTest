import React from 'react';
import PropTypes from 'prop-types';
import {
	StyleSheet, TouchableOpacity
} from 'react-native';

import OrderHeader from './OrderHeader';
import OrderInfo from './OrderInfo';
import { colors } from '../../constants/colors';

const styles = StyleSheet.create({
	container: {
		width: '90%',
		backgroundColor: colors.whiteColor,
		shadowColor: colors.bodyText,
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		borderRadius: 4
	}
});

const OrderItem = React.memo(({
	height,
	item = {},
	onPressHeart,
	onPress
}) => (
	<TouchableOpacity
		style={[styles.container, { height }]}
		activeOpacity={0.8}
		onPress={onPress}
	>
		<OrderHeader
			height={height}
			featured={item?.featured}
			heart={item?.heart}
			icon={item?.icon}
			image={item?.image}
			onPressHeart={onPressHeart}
		/>

		<OrderInfo
			title={item?.title}
			money={item?.money}
			coordinate={item?.coordinate}
			subTitle={item?.subTitle}
		/>
	</TouchableOpacity>
));

export default OrderItem;

OrderItem.propTypes = {
	height: PropTypes.number,
	item: PropTypes.object,
	onPressHeart: PropTypes.func,
	onPress: PropTypes.func
};
