import {
	put, takeLatest
} from 'redux-saga/effects';
import { readyReceipts } from '../mock-data/maps';
import * as types from '../actions/actionTypes';

function* fetchReadyReceipts() {
	yield put({ type: types.MAPS.FETCH_DATA_MAPS_SUCCESS, readyReceipts });
}

function* runner() {
	yield takeLatest(types.MAPS.FETCH_DATA_MAPS_REQUEST, fetchReadyReceipts);
}

export default runner;
