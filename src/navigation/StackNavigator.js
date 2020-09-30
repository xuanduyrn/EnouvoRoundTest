import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeView from '../views/HomeView';
import Search from '../views/SearchView';
import MapsView from '../views/MapsView';
import ApplicationView from '../views/ApplicationView';

const Stack = createStackNavigator();

const StackNavigator = () => ((
	<Stack.Navigator>
		<Stack.Screen
			name='Maps'
			component={MapsView}
			options={MapsView.navigationOptions}
		/>
		<Stack.Screen
			name='Home'
			component={HomeView}
		/>
		<Stack.Screen
			name='Search'
			component={Search}
			options={Search.navigationOptions}
		/>
		<Stack.Screen
			name='Applications'
			component={ApplicationView}
		/>
	</Stack.Navigator>
));

export default StackNavigator;
