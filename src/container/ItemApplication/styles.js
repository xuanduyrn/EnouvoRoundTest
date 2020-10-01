import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default StyleSheet.create({
	textName: {
		fontSize: 18,
		fontWeight: '700',
		lineHeight: 23,
		letterSpacing: 0.2,
		marginLeft: 16,
		color: colors.bodyText
	},
	cardContainer: {
		maxHeight: 380,
		width: '90%',
		marginLeft: '5%',
		borderRadius: 6,
		borderWidth: 1,
		marginTop: 20
	},
	buttonAmount: {
		height: 32,
		width: '90%',
		left: '5%',
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
		marginTop: 10,
		borderRadius: 4
	},
	textServices: {
		fontSize: 14,
		fontWeight: '400'
	},
	text: {
		left: 16,
		fontSize: 14,
		fontWeight: '400',
		color: colors.auxiliaryColor
	},
	weekdays: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	},
	button: {
		height: 32,
		width: 32,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 16,
		margin: 10
	},
	buttonEdit: {
		borderWidth: 1
	},
	rowSpaceBeetwen: {
		alignItems: 'center',
		flexDirection: 'row'
	},
	careQuestion: {
		justifyContent: 'space-between',
		marginTop: 10,
		marginBottom: 10,
		width: '90%'
	}
});
