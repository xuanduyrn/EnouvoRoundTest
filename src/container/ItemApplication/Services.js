import React from 'react';
import PropTypes from 'prop-types';
import {
	Text, TouchableOpacity, View
} from 'react-native';

import styles from './styles';
import { colors } from '../../constants/colors';
import activeOpacity from '../../constants/activeOpacity';
import { search } from '../../utils/configs';

const Services = React.memo(({
	item, onPress
}) => (
	<View style={{ marginBottom: 30 }}>
		<Text style={styles.text}>Service:</Text>
		{
			search.optionServices.map((r, index) => {
				const isActive = r.id === item?.value?.serviceTypes;
				const color = isActive ? colors.whiteColor : colors.bodyText;
				return (
					<TouchableOpacity
						key={index.toString()}
						activeOpacity={activeOpacity}
						style={[
							styles.buttonAmount,
							{ backgroundColor: isActive ? colors.defaultColor : colors.sliderColor }
						]}
						onPress={() => onPress(r.id)}
					>
						<Text style={[styles.textServices, { color }]}>{r.name}</Text>
						<Text style={[styles.textServices, { color }]}>{r.amount}</Text>
					</TouchableOpacity>
				);
			})
		}
	</View>
));

export default Services;

Services.propTypes = {
	item: PropTypes.object,
	onPress: PropTypes.func
};
