import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.backgroundColor
	},
	maps: {
		flex: 1,
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	},
	carouselContainer: {
		position: 'absolute',
		bottom: 20,
		left: 0,
		right: 0
	}
});
