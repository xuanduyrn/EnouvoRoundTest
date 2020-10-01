import * as types from './actionTypes';

export const fetchDataApplication = () => ({
	type: types.APPLICATION.FETCH_DATA_APP_REQUEST
});

export const updatedItem = payload => ({
	type: types.APPLICATION.UPDATED_DATA_APP,
	payload
});

export const addItemApp = payload => ({
	type: types.APPLICATION.CREATE_DATA_APP,
	payload
});
