import * as types from './actionTypes';

export const fetchDataSearch = () => ({
	type: types.SEARCH.FETCH_DATA_SEARCH_REQUEST
});

export const changeDataSearch = payload => ({
	type: types.SEARCH.UPDATED_DATA_SEARCH,
	payload
});
