import * as types from '../actions/actionTypes';

const initialState = {
	isFetching: false,
	application: {}
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case types.APPLICATION.FETCH_DATA_APP_REQUEST:
			return {
				...state,
				isFetching: true
			};
		case types.APPLICATION.FETCH_DATA_APP_SUCCESS:
			return {
				...state,
				isFetching: false,
				application: action.application
			};
		case types.APPLICATION.FETCH_DATA_APP_FAILED:
			return {
				...state,
				isFetching: false,
				application: {}
			};

		case types.APPLICATION.UPDATED_DATA_APP:
			return {
				...state,
				application: {
					...state.application,
					[action?.payload?.key]: action?.payload?.value
				}
			};

		case types.APPLICATION.CREATE_DATA_APP:
			return {
				...state,
				application: {
					...state.application,
					list: [
						...state.application.list,
						{
							...state.application.list[1],
							name: Math.random(),
							id: Math.floor(Math.random() * 1000)
						}
					]
				}
			};
		default:
			return state;
	}
}
