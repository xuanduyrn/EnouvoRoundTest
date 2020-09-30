import { all } from 'redux-saga/effects';

import search from './search.saga';
import maps from './maps.saga';

export default function* sagas() {
	yield all([
		search(),
		maps()
	]);
}
