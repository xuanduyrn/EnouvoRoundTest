import { PixelRatio } from 'react-native';

const Ratio = PixelRatio.get();

export function Scale(size) {
	if (Ratio < 2) {
		return size * 0.9;
	} else if (Ratio >= 2 && Ratio < 3) {
		return size;
	} else if (Ratio === 3) {
		return size * 1.2;
	} else {
		return size * 1.3;
	}
}
