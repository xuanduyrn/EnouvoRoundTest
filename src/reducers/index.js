import { combineReducers } from 'redux';

import search from './search';
import maps from './maps';
import app from './applications';

const appReducer = combineReducers({
	search,
	maps,
	app
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
