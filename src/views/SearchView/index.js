import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { exampleFunc } from '../../actions/searchExample';

const SearchView = ({
	objectExample,
	fetchExampleOject
}) => {

	React.useEffect(() => {
		fetchExampleOject();
	}, []);

	return (
		<View>
			<Text>Screen Search Filter</Text>
			<Text>{`data: ${ JSON.stringify(objectExample)}`}</Text>
		</View>
	);
};

const mapStateToProps = state => ({
	objectExample: state.search.objectExample
});

const mapDispatchToProps = dispatch => ({
	fetchExampleOject: () => dispatch(exampleFunc())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);

SearchView.propTypes = {
	objectExample: PropTypes.object,
	fetchExampleOject: PropTypes.func
};