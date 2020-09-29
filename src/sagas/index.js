import { all } from 'redux-saga/effects';

import search from './search.saga';

export default function* sagas() {
	yield all([
		search()
	]);
}
