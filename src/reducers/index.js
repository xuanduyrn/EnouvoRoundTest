import { combineReducers } from 'redux';

import search from './search';
import maps from './maps';

const appReducer = combineReducers({
	search,
	maps
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
