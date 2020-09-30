import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigation from './navigation';

import configureStore from './store';

const store = configureStore();

const App = () => (
	<Provider store={store}>
		<SafeAreaProvider>
			<AppNavigation />
		</SafeAreaProvider>
	</Provider>
);

export default App;
