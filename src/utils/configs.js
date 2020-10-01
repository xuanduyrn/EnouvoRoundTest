import moment from 'moment';

export const search = {
	optionServices: [
		{
			id: 1, name: 'Child care centre', iconName: 'ic-baby', amount: '110$'
		},
		{
			id: 2, name: 'Pre-school & Kindergarten', iconName: 'ic-abc', amount: '140$'
		},
		{
			id: 3, name: 'Family Day Care', iconName: 'ic-family', amount: '270$'
		},
		{
			id: 4, name: 'Before & After School Care', iconName: 'ic-bag', amount: '299$'
		}
	],

	valueMoneyForTheArea: [
		{ id: 1, name: 'Good' },
		{ id: 2, name: 'Very Good' },
		{ id: 3, name: 'Excellent' }
	],

	nationalQualityStandardRating: [
		{ value: 1, label: 'Exceeding or Excellent NQS' },
		{ value: 2, label: 'Meeting NQS' },
		{ value: 3, label: 'Working Towards NQS' },
		{ value: 4, label: 'Significant Improvement Required' },
		{ value: 5, label: 'Not Rated or Provisional Rating' }
	],
	sortResult: [
		{ value: 1, label: 'Highest KindiCare Rating' },
		{ value: 2, label: 'Featured' },
		{ value: 3, label: 'Shortest Distance' },
		{ value: 4, label: 'Highest Cost Per Day' },
		{ value: 5, label: 'Lowest Cost Per Day' },
		{ value: 6, label: 'Date Of Rating' }
	]
};

// eslint-disable-next-line prefer-spread
export const weekdays = Array.apply(null, Array(7)).map((_, i) => moment(i, 'e').startOf('week').isoWeekday(i + 1).format('ddd'));
