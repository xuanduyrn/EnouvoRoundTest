import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	ScrollView,
	Text, TouchableOpacity, View
} from 'react-native';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import MultiSlider from '../../container/MultiSlider';
import ItemFilters from '../../container/ItemFilters';
import { BackButton } from '../../container/HeaderButton';
import { CustomIcon } from '../../container/CustomIcon';
import { fetchDataSearch, changeDataSearch } from '../../actions/search';
import { colors } from '../../constants/colors';
import { optionServices, valueMoneyForTheArea } from '../../utils/configs';

class SearchView extends Component {
	static propTypes = {
		dataSearch: PropTypes.object,
		doGetDataSearch: PropTypes.func,
		doChangeDataSearch: PropTypes.func
	}

	static navigationOptions = ({ navigation }) => ({
		title: 'Search Filters',
		headerLeft: () => <BackButton navigation={navigation} />,
		headerStyle: {
			backgroundColor: colors.whiteColor
		}
	})

	constructor(props) {
		super(props);
		this.state = {
			services: optionServices,
			valuesMoney: valueMoneyForTheArea
		};
	}

	componentDidMount() {
		const { doGetDataSearch } = this.props;
		doGetDataSearch();
	}

	updated = (value, key) => {
		const { doChangeDataSearch } = this.props;
		doChangeDataSearch({
			key,
			value
		});
	}

	onValuesChange = (values, key) => {
		const { doChangeDataSearch, dataSearch } = this.props;
		const payload = {
			key,
			value: {
				min: values[0],
				max: values[1],
				values: dataSearch[key]?.values
			}
		};
		doChangeDataSearch(payload);
	}

	render() {
		const { services, valuesMoney } = this.state;
		const { dataSearch } = this.props;
		const {
			address, ratingKindiCare, distanceFromHome, cosPerDay, serviceTypes, valueForMoney
		} = dataSearch;
		return (
			<SafeAreaView style={styles.container}>
				<ScrollView>
					<TouchableOpacity style={styles.buttonAddress}>
						<CustomIcon name='ic-pinmap2' size={20} />
						<Text numberOfLines={1} style={styles.textAddress}>{address}</Text>
						<Text style={styles.textAddressChange}>Change</Text>
					</TouchableOpacity>

					<Text style={styles.textChooseServices}>Choose Service Type</Text>

					<View style={styles.services}>
						{
							services.map((r, index) => {
								const color = r.id === serviceTypes ? colors.defaultColor : colors.bodyText;
								return (
									<View style={styles.viewServices} key={index.toString()}>
										<TouchableOpacity
											style={[styles.buttonServices, { borderColor: color }]}
											onPress={() => this.updated(r.id, 'serviceTypes')}
										>
											<CustomIcon name={r.iconName} size={23} color={color} />
										</TouchableOpacity>
										<Text numberOfLines={2} style={[styles.textNameServices, { color }]}>{r.name}</Text>
									</View>
								);
							})
						}
					</View>

					<ItemFilters
						iconName='ic-kindi'
						iconSize={23}
						title='KindiCare Rating'
						valueLeft={`${ ratingKindiCare?.min }.0`}
						valueRight={`${ ratingKindiCare?.max }.0`}
					>
						<MultiSlider
							min={ratingKindiCare?.min}
							max={ratingKindiCare?.max}
							values={ratingKindiCare?.values}
							onValuesChange={val => this.onValuesChange(val, 'ratingKindiCare')}
						/>
					</ItemFilters>

					<ItemFilters
						iconName='ic-2pinmap'
						iconSize={23}
						title='The shorted distance from home'
						valueLeft={`${ distanceFromHome?.min } km`}
						valueRight={`${ distanceFromHome?.max } km`}
					>
						<MultiSlider
							min={distanceFromHome?.min}
							max={distanceFromHome?.max}
							values={distanceFromHome?.values}
							onValuesChange={val => this.onValuesChange(val, 'distanceFromHome')}
						/>
					</ItemFilters>

					<ItemFilters
						iconName='ic-moneyflower'
						iconSize={23}
						title='Value For Money For The Area'
					>
						<View style={styles.valueForMoney}>
							{
								valuesMoney.map((r, index) => {
									const backgroundColor = r.id === valueForMoney ? colors.defaultColor : colors.whiteColor;
									const color = r.id === valueForMoney ? colors.whiteColor : colors.defaultColor;
									return (
										<TouchableOpacity
											key={index.toString()}
											style={[styles.buttonForMoney, { backgroundColor }]}
											onPress={() => this.updated(r.id, 'valueForMoney')}
										>
											<Text style={[styles.textMoney, { color }]}>{r.name}</Text>
										</TouchableOpacity>
									);
								})
							}
						</View>
					</ItemFilters>

					<ItemFilters
						iconName='ic-cost'
						iconSize={23}
						title='Cost Per Day'
						valueLeft={`$${ cosPerDay?.min }`}
						valueRight={`$${ cosPerDay?.max }`}
					>
						<MultiSlider
							min={cosPerDay?.min}
							max={cosPerDay?.max}
							values={cosPerDay?.values}
							onValuesChange={val => this.onValuesChange(val, 'cosPerDay')}
						/>
					</ItemFilters>

					<ItemFilters
						iconName='ic-nqsrating'
						iconSize={23}
						title='National Quality Standard Rating'
					>
						<Text>select</Text>
					</ItemFilters>

					<ItemFilters
						iconName='ic-sort'
						iconSize={23}
						title='Sort Results By'
					>
						<Text>select</Text>
					</ItemFilters>
				</ScrollView>
			</SafeAreaView>
		);
	}
}

const mapStateToProps = state => ({
	dataSearch: state.search.dataSearch
});

const mapDispatchToProps = dispatch => ({
	doGetDataSearch: () => dispatch(fetchDataSearch()),
	doChangeDataSearch: payload => dispatch(changeDataSearch(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);
