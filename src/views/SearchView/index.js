import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	ScrollView,
	Text, TouchableOpacity, View
} from 'react-native';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import DropDownPicker from 'react-native-dropdown-picker';

import styles from './styles';
import MultiSlider from '../../container/MultiSlider';
import ItemFilters from '../../container/ItemFilters';
import { BackButton } from '../../container/HeaderButton';
import { CustomIcon } from '../../container/CustomIcon';
import { fetchDataSearch, changeDataSearch } from '../../actions/search';
import { colors } from '../../constants/colors';
import { search } from '../../utils/configs';

class SearchView extends Component {
	static propTypes = {
		dataSearch: PropTypes.object,
		navigation: PropTypes.object,
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
			isVisibleNational: false,
			isVisibleSort: false
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

	someDropDownColors = (key, value) => ((search[key] || []).some(s => s.value === value) ? colors.whiteColor : colors.bodyText);

	render() {
		const { isVisibleNational, isVisibleSort } = this.state;
		const { dataSearch, navigation } = this.props;
		const {
			address,
			ratingKindiCare,
			distanceFromHome,
			cosPerDay,
			serviceTypes,
			valueForMoney,
			nationalQualityStandardRating,
			sortResultBy
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
							search.optionServices.map((r, index) => {
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
								search.valueMoneyForTheArea.map((r, index) => {
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

					<View style={{ marginBottom: isVisibleNational ? 150 : 0 }}>
						<ItemFilters
							iconName='ic-nqsrating'
							iconSize={23}
							title='National Quality Standard Rating'
						>
							<DropDownPicker
								items={search.nationalQualityStandardRating}
								defaultValue={nationalQualityStandardRating}
								containerStyle={styles.dropDownContainer}
								isVisible={isVisibleNational}
								defaultNull
								zIndex={1000}
								activeLabelStyle={{
									...styles.dropdownLabelStyle,
									color: this.someDropDownColors('nationalQualityStandardRating', nationalQualityStandardRating)
								}}
								labelStyle={{
									...styles.dropdownLabelStyle,
									color: colors.bodyText
								}}
								activeItemStyle={{
									backgroundColor: colors.defaultColor
								}}
								selectedtLabelStyle={{
									color: 'red'
								}}
								itemStyle={styles.itemStyleDropDown}
								dropDownStyle={styles.dropDownStyle}
								onChangeItem={item => this.updated(item.value, 'nationalQualityStandardRating')}
								onOpen={() => this.setState({ isVisibleNational: true })}
								onClose={() => this.setState({ isVisibleNational: false })}
							/>
						</ItemFilters>
					</View>

					<View style={{ marginBottom: isVisibleSort ? 150 : 20 }}>
						<ItemFilters
							iconName='ic-sort'
							iconSize={23}
							title='Sort Results By'
						>
							<DropDownPicker
								items={search.sortResult}
								defaultValue={sortResultBy}
								containerStyle={styles.dropDownContainer}
								isVisible={isVisibleSort}
								defaultNull
								labelStyle={{
									...styles.dropdownLabelStyle,
									color: colors.bodyText
								}}
								activeLabelStyle={{
									...styles.dropdownLabelStyle,
									color: this.someDropDownColors('sortResult', sortResultBy)
								}}
								activeItemStyle={{
									backgroundColor: colors.defaultColor
								}}
								zIndex={1000}
								itemStyle={styles.itemStyleDropDown}
								dropDownStyle={styles.dropDownStyle}
								onChangeItem={item => this.updated(item.value, 'sortResultBy')}
								onOpen={() => this.setState({ isVisibleSort: true })}
								onClose={() => this.setState({ isVisibleSort: false })}
							/>
						</ItemFilters>
					</View>

					<TouchableOpacity
						style={styles.buttonChilCare}
						onPress={() => navigation.navigate('Applications')}
					>
						<Text style={styles.textFindChilCare}>Find Childcare</Text>
					</TouchableOpacity>

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
