import * as types from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  objectExample: {}
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case types.SEARCH.EXAMPLE_SEARCH_REQUEST:
			return {
        ...state,
        isFetching: true
			};
		case types.SEARCH.EXAMPLE_SEARCH_SUCCESS:
			return {
				...state,
        isFetching: false,
        objectExample: action.dataExample
			};
		case types.SEARCH.EXAMPLE_SEARCH_FAILED:
			return {
        ...state,
        isFetching: false,
        objectExample: {}
			};
		default:
			return state;
	}
}
