import {
	put, takeLatest
} from 'redux-saga/effects';
import { dataSearch } from '../mock-data/search';
import * as types from '../actions/actionTypes';

function* fetchDataSearch() {
	yield put({ type: types.SEARCH.FETCH_DATA_SEARCH_SUCCESS, dataSearch });
}

function* runner() {
	yield takeLatest(types.SEARCH.FETCH_DATA_SEARCH_REQUEST, fetchDataSearch);
}

export default runner;
