import { createIconSetFromIcoMoon } from 'react-native-vector-icons';

import icoMoonConfig from '../assets/selection.json';

const CustomIcon = createIconSetFromIcoMoon(
	icoMoonConfig,
	'Kindicare',
	'Kindicare.ttf'
);

export { CustomIcon };
