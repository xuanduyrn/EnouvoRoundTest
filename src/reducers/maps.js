import * as types from '../actions/actionTypes';

const initialState = {
	isFetching: false,
	readyReceipts: []
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case types.MAPS.FETCH_DATA_MAPS_REQUEST:
			return {
				...state,
				isFetching: true
			};
		case types.MAPS.FETCH_DATA_MAPS_SUCCESS:
			return {
				...state,
				isFetching: false,
				readyReceipts: action.readyReceipts
			};
		case types.MAPS.FETCH_DATA_MAPS_FAILED:
			return {
				...state,
				isFetching: false,
				readyReceipts: []
			};
		default:
			return state;
	}
}
