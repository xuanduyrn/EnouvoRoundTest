import React from 'react';
import PropTypes from 'prop-types';
import {
	Text, View, TouchableOpacity
} from 'react-native';

import { colors } from '../../constants/colors';
import { weekdays } from '../../utils/configs';
import activeOpacity from '../../constants/activeOpacity';
import styles from './styles';

const DayCareRequire = React.memo(({
	item, onPress
}) => (
	<>
		<Text style={styles.text}>Day care require:</Text>
		<View style={styles.weekdays}>
			{weekdays.map((day, index) => {
				const isActive = (item?.value?.dayCareRequire || []).some(s => s === day);
				const backgroundColor = isActive ? colors.defaultColor : colors.sliderColor;
				const color = isActive ? colors.whiteColor : colors.bodyText;
				return (
					<TouchableOpacity
						key={index.toString()}
						style={[
							styles.button,
							{ backgroundColor }
						]}
						onPress={() => onPress(day)}
						activeOpacity={activeOpacity}
					>
						<Text style={[styles.textServices, { color }]}>{day}</Text>
					</TouchableOpacity>
				);
			})}
		</View>
	</>
));

export default DayCareRequire;

DayCareRequire.propTypes = {
	item: PropTypes.object,
	onPress: PropTypes.func
};
