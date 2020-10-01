import {
	put, takeLatest
} from 'redux-saga/effects';
import { dataSearch } from '../mock-data/search';
import * as types from '../actions/actionTypes';

function* fetchDataApplication() {
	yield put({ type: types.APPLICATION.FETCH_DATA_APP_SUCCESS, application: dataSearch });
}

function* runner() {
	yield takeLatest(types.APPLICATION.FETCH_DATA_APP_REQUEST, fetchDataApplication);
}

export default runner;
