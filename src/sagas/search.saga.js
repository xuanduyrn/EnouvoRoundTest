import {
  put, takeLatest
} from 'redux-saga/effects';
import * as types from '../actions/actionTypes';

function* exampleFunc() {
  const dataExample = { name: 'duypx', age: 24, role: 'developer' };
  yield put({ type: types.SEARCH.EXAMPLE_SEARCH_SUCCESS, dataExample });
}

function* runner() {
  yield takeLatest(types.SEARCH.EXAMPLE_SEARCH_REQUEST, exampleFunc);
}

export default runner;
