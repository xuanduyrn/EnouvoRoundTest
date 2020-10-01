import React from 'react';
import PropTypes from 'prop-types';
import {
	View, Text, TouchableOpacity
} from 'react-native';
import moment from 'moment';

import DayCareRequire from './DayCareRequire';
import Services from './Services';

import { CustomIcon } from '../CustomIcon';
import { colors } from '../../constants/colors';
import activeOpacity from '../../constants/activeOpacity';
import styles from './styles';

const ItemApplication = React.memo(({
	item,
	onPress,
	onPressDayCare,
	onPressServices
}) => (
	<TouchableOpacity
		style={[styles.cardContainer, { borderColor: item?.isActive ? colors.defaultColor : colors.bodyText }]}
		onPress={onPress}
	>
		<View style={[styles.rowSpaceBeetwen, { justifyContent: 'space-between' }]}>
			<View style={[styles.rowSpaceBeetwen, { justifyContent: 'center' }]}>
				<Text style={[styles.textName, { marginRight: 10 }]}>{item?.name}</Text>
				<CustomIcon
					size={23}
					color={item?.sex === 'Male' ? colors.tintColor : colors.defaultColor}
					name={item?.sex === 'Male' ? 'ic-boy' : 'ic-girl'}
				/>
			</View>
			<TouchableOpacity
				style={[styles.button, styles.buttonEdit, { borderColor: item?.isActive ? colors.defaultColor : colors.bodyText }]}
				onPress={() => { }}
				activeOpacity={activeOpacity}
			>
				<CustomIcon size={18} name='ic-pen' color={item?.isActive ? colors.defaultColor : colors.bodyText} />
			</TouchableOpacity>
		</View>

		<Text style={styles.text}>{moment(item?.createAt).format('MM-DD-YYYY')}</Text>

		<View style={[styles.rowSpaceBeetwen, styles.careQuestion]}>
			<Text style={[styles.text]}>{`Allergies: ${ item?.allergies ? 'Yes' : 'No' }`}</Text>
			<Text style={[styles.text]}>{`Special need: ${ item?.specialNeed ? 'Yes' : 'No' }`}</Text>
		</View>

		{
			item.value ? (
				<>
					<DayCareRequire item={item} onPress={onPressDayCare} />
					<Services item={item} onPress={onPressServices} />
				</>
			) : null
		}
	</TouchableOpacity>
));

export default ItemApplication;

ItemApplication.propTypes = {
	item: PropTypes.object,
	onPress: PropTypes.func,
	onPressDayCare: PropTypes.func,
	onPressServices: PropTypes.func
};
