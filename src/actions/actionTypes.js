function createRequestTypes(base, types) {
	const res = {};
	types.forEach(type => (res[type] = `${ base }_${ type }`));
	return res;
}

export const SEARCH = createRequestTypes('SEARCH', [
	'FETCH_DATA_SEARCH_REQUEST',
	'FETCH_DATA_SEARCH_SUCCESS',
	'FETCH_DATA_SEARCH_FAILED',

	'UPDATED_DATA_SEARCH'
]);
