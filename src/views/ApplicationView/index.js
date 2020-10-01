import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Text, FlatList, StyleSheet, ActivityIndicator, View, TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';

import { BackButton } from '../../container/HeaderButton';
import { colors } from '../../constants/colors';
import ItemApplication from '../../container/ItemApplication';
import {
	fetchDataApplication, updatedItem, addItemApp
} from '../../actions/applications';
import activeOpacity from '../../constants/activeOpacity';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.whiteColor,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textName: {
		fontSize: 18,
		fontWeight: '700',
		lineHeight: 23,
		letterSpacing: 0.2,
		marginLeft: 16,
		color: colors.bodyText
	},
	description: {
		fontSize: 12,
		fontWeight: '400',
		color: colors.auxiliaryColor,
		marginLeft: 16,
		width: '95%'
	},
	footer: {
		width: '90%',
		marginLeft: '5%',
		marginTop: 30
	},
	textAddChilCare: {
		fontWeight: '600',
		textDecorationLine: 'underline',
		textDecorationColor: colors.defaultColor,
		fontSize: 14,
		color: colors.defaultColor
	},
	buttonDone: {
		marginTop: 25,
		marginBottom: 35,
		width: '100%',
		borderRadius: 4,
		height: 48,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.defaultColor
	},
	textDone: {
		fontWeight: '400',
		color: colors.whiteColor,
		fontSize: 14
	}
});

class ApplicationView extends Component {
	static propTypes = {
		application: PropTypes.object,
		navigation: PropTypes.object,
		isFetching: PropTypes.bool,
		doGetDataApplication: PropTypes.func,
		doAddItem: PropTypes.func,
		doUpdateItem: PropTypes.func
	}

	static navigationOptions = ({ navigation }) => ({
		title: 'Application',
		headerLeft: () => <BackButton navigation={navigation} />,
		headerStyle: {
			backgroundColor: colors.whiteColor
		}
	})

	constructor(props) {
		super(props);
		this.state = {
			refreshing: false
		};
	}

	componentDidMount() {
		const { doGetDataApplication } = this.props;
		doGetDataApplication();
	}

	setRefreshing = (key) => {
		this.setState({ [key]: true });
		setTimeout(() => {
			this.setState({ [key]: false });
		}, 1500);
	}

	setActiveItem = (item) => {
		const { doUpdateItem, application } = this.props;
		doUpdateItem({
			key: 'list',
			value: application.list.map((x) => {
				if (x.id === item.id) {
					return { ...x, isActive: true };
				}
				return { ...x, isActive: false };
			})
		});
	}

	onPressDayCare = (item, day) => {
		const { doUpdateItem, application } = this.props;
		const payload = {
			key: 'list',
			value: application.list.map((x) => {
				if (x.id === item.id && x?.value) {
					const dayCareRequire = x.value?.dayCareRequire.some(s => s === day) ? x.value.dayCareRequire.filter(f => f !== day) : [...x.value.dayCareRequire, day];
					return { ...x, value: { ...x.value, dayCareRequire } };
				}
				return x;
			})
		};
		doUpdateItem(payload);
	}

	onPressServices = (item, serviceId) => {
		const { doUpdateItem, application } = this.props;
		const payload = {
			key: 'list',
			value: application.list.map((x) => {
				if (x.id === item.id && x?.value) {
					return { ...x, value: { ...x.value, serviceTypes: serviceId } };
				}
				return x;
			})
		};
		doUpdateItem(payload);
	}

	renderHeader = item => (
		<>
			<Text style={[styles.textName, { marginTop: 16 }]}>Children Information</Text>
			<Text style={styles.description}>{item.description}</Text>
		</>
	)

	renderItem = ({ item }) => (
		<ItemApplication
			item={item}
			onPress={() => this.setActiveItem(item)}
			onPressDayCare={day => this.onPressDayCare(item, day)}
			onPressServices={serviceId => this.onPressServices(item, serviceId)}
		/>
	)

	renderFooter = () => {
		const { doAddItem, navigation } = this.props;
		return (
			<View style={styles.footer}>
				<Text style={styles.textAddChilCare} onPress={doAddItem}>+ Add New Child</Text>

				<TouchableOpacity
					activeOpacity={activeOpacity}
					style={styles.buttonDone}
					onPress={() => navigation.pop()}
				>
					<Text style={styles.textDone}>Done</Text>
				</TouchableOpacity>
			</View>
		);
	}

	render() {
		const { application, isFetching } = this.props;
		const { refreshing } = this.state;
		return (
			<SafeAreaView style={styles.container}>
				{
					!isFetching ? (
						<FlatList
							refreshing={refreshing}
							onRefresh={() => this.setRefreshing('refreshing')}
							data={application?.list || []}
							keyExtractor={(_, index) => index.toString()}
							renderItem={this.renderItem}
							ListHeaderComponent={() => this.renderHeader(application)}
							ListFooterComponent={this.renderFooter}
						/>
					) : <ActivityIndicator size='small' color={colors.auxiliaryColor} />
				}
			</SafeAreaView>
		);
	}
}

const mapStateToProps = state => ({
	application: state.app.application,
	isFetching: state.app.isFetching
});

const mapDispatchToProps = dispatch => ({
	doGetDataApplication: () => dispatch(fetchDataApplication()),
	doUpdateItem: payload => dispatch(updatedItem(payload)),
	doAddItem: payload => dispatch(addItemApp(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationView);
