import React from 'react';
import PropTypes from 'prop-types';
import {
	View, StyleSheet
} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import { colors } from '../constants/colors';

const styles = StyleSheet.create({
	customMarker: {
		height: 10,
		width: 10,
		borderRadius: 5,
		backgroundColor: colors.whiteColor,
		marginTop: 10,
		borderColor: colors.defaultColor,
		borderWidth: 1
	},
	sliderContainer: {
		margin: 0,
		padding: 0,
		height: 15
	}
});

const CustomMarker = React.memo(() => <View style={styles.customMarker} />);
CustomMarker.displayName = 'CustomMarker';

const MultiSliders = React.memo(({
	min,
	max,
	values,
	onValuesChange
}) => (
	<MultiSlider
		values={values || [0, 100]}
		sliderLength={350}
		onValuesChange={onValuesChange}
		min={min}
		max={max}
		step={1}
		allowOverlap={false}
		snapped
		minMarkerOverlapDistance={40}
		selectedStyle={{
			backgroundColor: colors.defaultColor,
			height: 10
		}}
		unselectedStyle={{
			backgroundColor: colors.sliderColor,
			borderRadius: 10
		}}
		containerStyle={styles.sliderContainer}
		trackStyle={{
			height: 10
		}}
		customMarker={() => <CustomMarker />}
	/>
));

export default MultiSliders;

MultiSliders.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number,
	values: PropTypes.array,
	onValuesChange: PropTypes.func
};
