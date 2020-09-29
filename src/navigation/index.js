import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import StackNavigator from './StackNavigator';

const navigatorTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: 'transparent'
	}
};

const AppNavigation = () => {
	return (
		<NavigationContainer theme={navigatorTheme}>
			<StackNavigator />
		</NavigationContainer>
	);
};

export default AppNavigation;
