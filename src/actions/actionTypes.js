function createRequestTypes(base, types) {
	const res = {};
	types.forEach(type => (res[type] = `${ base }_${ type }`));
	return res;
}

export const SEARCH = createRequestTypes('SEARCH', [
	'FETCH_DATA_SEARCH_REQUEST',
	'FETCH_DATA_SEARCH_SUCCESS',
	'FETCH_DATA_SEARCH_FAILED',

	'UPDATED_DATA_SEARCH',
]);

export const MAPS = createRequestTypes('MAPS', [
	'FETCH_DATA_MAPS_REQUEST',
	'FETCH_DATA_MAPS_SUCCESS',
	'FETCH_DATA_MAPS_FAILED'
]);
