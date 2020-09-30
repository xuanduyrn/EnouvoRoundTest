function createRequestTypes(base, types) {
	const res = {};
	types.forEach(type => (res[type] = `${ base }_${ type }`));
	return res;
}

export const SEARCH = createRequestTypes('SEARCH', [
	'EXAMPLE_SEARCH_REQUEST',
	'EXAMPLE_SEARCH_SUCCESS',
	'EXAMPLE_SEARCH_FAILED'
]);
