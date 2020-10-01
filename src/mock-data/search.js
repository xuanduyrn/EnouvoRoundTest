export const dataSearch = {
	name: 'Wesley Perry',
	address: '6 Leigh Place, West Pennant Hills New South Wales, US',
	serviceTypes: 1,
	valueForMoney: 2,
	ratingKindiCare: {
		min: 8,
		max: 10,
		values: [8.8, 10]
	},
	distanceFromHome: {
		min: 0,
		max: 50,
		values: [0, 50]
	},
	cosPerDay: {
		min: 55,
		max: 127,
		values: [72, 122]
	},
	nationalQualityStandardRating: 1,
	description: 'You can choose which children want to apply by clicking on their name and editing the information by clicking on the pen icon',
	sortResultBy: 1,
	list: [
		{
			id: 1,
			createAt: new Date().toISOString(),
			allergies: true,
			specialNeed: true,
			sex: 'Male',
			name: 'Pham Xuan Duy',
			value: {
				serviceTypes: 1,
				dayCareRequire: ['Mon', 'Wed', 'Fri'],
			},
			isActive: true
		},
		{
			id: 2,
			createAt: new Date().toISOString(),
			allergies: true,
			specialNeed: false,
			sex: 'Female',
			name: 'Kathryn Murphy',
			isActive: false
		}
	]
};
