import React from 'react';
import PropTypes from 'prop-types';
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';

import { CustomIcon } from './CustomIcon';
import { colors } from '../constants/colors';

export const headerIconSize = 23;

const CustomHeaderButton = React.memo(props => (
	<HeaderButton {...props} IconComponent={CustomIcon} iconSize={headerIconSize} color={colors.bodyText} />
));

export const CustomHeaderButtons = React.memo(props => (
	<HeaderButtons
		HeaderButtonComponent={CustomHeaderButton}
		{...props}
	/>
));

export const BackButton = React.memo(({ navigation }) => (
	<CustomHeaderButtons left>
		<Item title='back' iconName='ic-back' onPress={() => navigation.pop()} />
	</CustomHeaderButtons>
));

BackButton.propTypes = {
	navigation: PropTypes.object.isRequired
};

export { Item };
