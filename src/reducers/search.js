import * as types from '../actions/actionTypes';

const initialState = {
	isFetching: false,
	dataSearch: {}
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case types.SEARCH.FETCH_DATA_SEARCH_REQUEST:
			return {
				...state,
				isFetching: true
			};
		case types.SEARCH.FETCH_DATA_SEARCH_SUCCESS:
			return {
				...state,
				isFetching: false,
				dataSearch: action.dataSearch
			};
		case types.SEARCH.FETCH_DATA_SEARCH_FAILED:
			return {
				...state,
				isFetching: false,
				dataSearch: {}
			};

		case types.SEARCH.UPDATED_DATA_SEARCH:
			return {
				...state,
				dataSearch: {
					...state.dataSearch,
					[action?.payload?.key]: action?.payload?.value
				}
			};
		default:
			return state;
	}
}
