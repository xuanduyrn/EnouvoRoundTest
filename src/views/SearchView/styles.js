import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

const shareStyle = {
	letterSpacing: 0.2,
	lineHeight: 23
};

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.whiteColor
	},
	buttonAddress: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 55,
		padding: 10,
		width: '100%'
	},
	textAddress: {
		...shareStyle,
		fontWeight: '700',
		fontSize: 14,
		fontStyle: 'normal',
		color: colors.bodyText,
		marginLeft: 5,
		width: '80%'
	},
	textAddressChange: {
		...shareStyle,
		fontSize: 10,
		color: colors.defaultColor,
		fontStyle: 'normal',
		fontWeight: '700',
		width: '10%',
		marginLeft: 5
	},

	textChooseServices: {
		...shareStyle,
		fontSize: 18,
		fontWeight: 'bold',
		color: colors.defaultColor,
		padding: 10,
		marginLeft: 12
	},
	viewServices: {
		height: 100,
		width: '25%',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10
	},
	buttonServices: {
		backgroundColor: colors.backgroundColor,
		height: 52,
		width: 52,
		borderRadius: 26,
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textNameServices: {
		fontSize: 12,
		fontWeight: '400',
		fontStyle: 'normal',
		lineHeight: 15.06,
		textAlign: 'center',
		marginTop: 10
	},
	services: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	valueForMoney: {
		width: '90%',
		height: 55,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row'
	},
	buttonForMoney: {
		width: 91,
		height: 34,
		borderRadius: 4,
		borderColor: colors.defaultColor,
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textMoney: {
		fontSize: 14,
		fontWeight: '400',
		fontStyle: 'normal',
		lineHeight: 17.57,
		letterSpacing: 0.2
	},

	dropDownContainer: {
		height: 48,
		width: '100%'
	},
	dropDownStyle: {
		backgroundColor: colors.whiteColor,
		borderColor: colors.defaultColor,
		borderWidth: 1,
		padding: 0,
		margin: 0,
		paddingVertical: 0,
		paddingHorizontal: 0
	},
	dropdownLabelStyle: {
		fontSize: 14,
		padding: 5
	},
	itemStyleDropDown: {
		justifyContent: 'flex-start',
		width: '100%',
		backgroundColor: colors.whiteColor
	},
	buttonChilCare: {
		height: 48,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.defaultColor,
		width: '90%',
		margin: '5%',
		borderRadius: 4
	},
	textFindChilCare: {
		...shareStyle,
		fontWeight: '700',
		fontSize: 14,
		fontStyle: 'normal',
		color: colors.whiteColor,
		marginLeft: 5
	}
});
