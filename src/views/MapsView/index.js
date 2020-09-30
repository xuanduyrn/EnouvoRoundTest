import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View } from 'react-native';
import { connect } from 'react-redux';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import OrderItem from '../../container/OrderItem';
import { colors } from '../../constants/colors';
import { BackButton } from '../../container/HeaderButton';
import { customMapStyle } from '../../constants/mapStyles';
import { fetchReadyReceipts } from '../../actions/maps';
import styles from './styles';
import { Scale } from '../../constants/constain';
import { CustomIcon } from '../../container/CustomIcon';

const { width, height } = Dimensions.get('window');
const horizontalMargin = 20;
const ASPECT_RATIO = width / height;
const CARD_HEIGHT = Scale((height > width ? height : width) / 4);

const LATITUDE = 16.048357;
const LONGITUDE = 108.2011655;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class MapsView extends Component {
	static propTypes = {
		readyReceipts: PropTypes.array,
		navigation: PropTypes.object,
		doGetReadyReceipts: PropTypes.func
	}

	static navigationOptions = ({ navigation }) => ({
		title: 'Maps',
		headerLeft: () => <BackButton navigation={navigation} />,
		headerStyle: {
			backgroundColor: colors.whiteColor
		}
	})

	constructor(props) {
		super(props);
		this._mapView = null;
		this._carousel = null;
		this.mapReady = null;
		this.state = {
			initialRegion: {
				latitude: LATITUDE,
				longitude: LONGITUDE,
				latitudeDelta: LATITUDE_DELTA,
				longitudeDelta: LONGITUDE_DELTA
			}
		};
	}

	componentDidMount() {
		const { doGetReadyReceipts } = this.props;
		doGetReadyReceipts();
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		const { readyReceipts } = nextProps;
		const { selectedMarker, initialRegion } = this.state;
		if (readyReceipts.length > 0) {
			if (!selectedMarker) {
				this.setState({
					selectedMarker: readyReceipts[0].id,
					initialRegion: {
						...initialRegion,
						...readyReceipts[0]?.coordinate
					}
				});
				this.animateToRegion(readyReceipts);
			}
		}
	}

	animateToRegion(readyReceipts) {
		const { initialRegion, selectedMarker } = this.state;
		const points = readyReceipts.map((item) => {
			const lat = item.coordinate ? parseFloat(item.coordinate.latitude) : null;
			const lng = item.coordinate ? parseFloat(item.coordinate.longitude) : null;
			if (!lat || !lng) { return null; }
			return { latitude: lat, longitude: lng };
		});
		const region = {
			...initialRegion,
			...points[selectedMarker]
		};
		this._mapView?.animateToRegion(region, 500);
		setTimeout(() => {
			this.setState({ initialRegion: region });
		}, 500);
	}

	getSliderIndex() {
		const { selectedMarker } = this.state;
		const { readyReceipts } = this.props;
		if (!selectedMarker) { return 0; }
		return readyReceipts
			? readyReceipts
				.map(r => r.id)
				.indexOf(selectedMarker)
			: 1;
	}

	onSelectSlider(index, manual) {
		const { readyReceipts } = this.props;
		const { initialRegion } = this.state;
		const selectedItem = readyReceipts
			? readyReceipts[index]
			: null;
		const region = { ...initialRegion };
		if (selectedItem && manual) {
			this.setState({ selectedMarker: selectedItem.id });
			const lat = selectedItem.coordinate
				? parseFloat(selectedItem.coordinate.latitude)
				: null;
			const lng = selectedItem.coordinate
				? parseFloat(selectedItem.coordinate.longitude)
				: null;
			if (!lat || !lng) { return; }
			region.latitude = lat;
			region.longitude = lng;

			this.mapReady && this._mapView?.animateToRegion(region, 500);
			this.mapReady = false;
			setTimeout(() => {
				this.mapReady = true;
			}, 500);
		}
	}

	renderItem = ({ item }) => {
		const { navigation } = this.props;
		return (
			<OrderItem
				height={CARD_HEIGHT}
				item={item}
				onPress={() => navigation.navigate('Applications')}
			/>
		);
	}

	render() {
		const { initialRegion, selectedMarker } = this.state;
		const { readyReceipts } = this.props;
		return (
			<SafeAreaView style={styles.container}>
				<MapView
					provider={PROVIDER_GOOGLE}
					style={styles.maps}
					followUserLocation
					showsUserLocation
					followsUserLocation
					loadingEnabled
					customMapStyle={customMapStyle}
					ref={(ref) => {
						this._mapView = ref;
					}}
					initialRegion={initialRegion}
					onRegionChangeComplete={(mapRegion) => {
						this.setState({ initialRegion: mapRegion });
					}}
					onMapReady={() => {}}

				>
					{
						readyReceipts.map((item, index) => {
							const lat = item.coordinate
								? parseFloat(item.coordinate.latitude)
								: null;
							const lng = item.coordinate
								? parseFloat(item.coordinate.longitude)
								: null;
							if (!lat || !lng) { return null; }

							return (
								<Marker
									key={index.toString()}
									coordinate={{ latitude: lat, longitude: lng }}
									onPress={() => this.setState({ selectedMarker: item.id })}
								>
									<CustomIcon name='ic-pinmap' size={40} color={selectedMarker === item.id ? colors.defaultColor : colors.bodyText} />
								</Marker>
							);
						})
					}

				</MapView>
				<View style={styles.carouselContainer}>
					<Carousel
						ref={(c) => {
							this._carousel = c;
						}}
						firstItem={this.getSliderIndex()}
						data={readyReceipts}
						renderItem={this.renderItem}
						sliderWidth={width}
						itemWidth={width - horizontalMargin * 2}
						itemHeight={CARD_HEIGHT}
						layout='default'
						inactiveSlideOpacity={1}
						inactiveSlideScale={1}
						onBeforeSnapToItem={item => this.onSelectSlider(item, true)}
					/>
				</View>
			</SafeAreaView>
		);
	}
}

const mapStateToProps = state => ({
	readyReceipts: state.maps.readyReceipts
});

const mapDispatchToProps = dispatch => ({
	doGetReadyReceipts: () => dispatch(fetchReadyReceipts())
});

export default connect(mapStateToProps, mapDispatchToProps)(MapsView);
