import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '../views/SearchView';
import MapsView from '../views/MapsView';
import ApplicationView from '../views/ApplicationView';

const Stack = createStackNavigator();

const StackNavigator = () => ((
  <Stack.Navigator>
    <Stack.Screen
      name='Search'
      component={Search}
    />
    <Stack.Screen
      name='Maps'
      component={MapsView}
    />
    <Stack.Screen
      name='Applications'
      component={ApplicationView}
    />
  </Stack.Navigator>
));

export default StackNavigator;
