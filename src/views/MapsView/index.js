import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '../../constants/colors';
import { BackButton } from '../../container/HeaderButton';
import styles from './styles';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;

const LATITUDE = 16.048357;
const LONGITUDE = 108.2011655;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class MapsView extends Component {
	static propTypes = {

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
		this.state = {
			initialRegion: {
				latitude: LATITUDE,
				longitude: LONGITUDE,
				latitudeDelta: LATITUDE_DELTA,
				longitudeDelta: LONGITUDE_DELTA
			}
		};
	}

	render() {
		const { initialRegion } = this.state;
		return (
			<SafeAreaView style={styles.container}>
				<MapView
					provider={PROVIDER_GOOGLE}
					style={styles.maps}
					followUserLocation
					showsUserLocation
					followsUserLocation
					loadingEnabled
					ref={(ref) => {
						this._mapView = ref;
					}}
					initialRegion={initialRegion}
					onRegionChangeComplete={this.onRegionChangeComplete}
					getLocationExact={() => { }}
					onUserLocationChange={obj => this.setCurrentUser(obj.nativeEvent)}
				/>
			</SafeAreaView>
		);
	}
}

export default MapsView;
