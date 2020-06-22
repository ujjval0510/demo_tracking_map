import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';
import Spacer from '../components/Spacers';


const TrackDetailScreen = ({ navigation }) => {

    const { state } = useContext(TrackContext);

    const track = state.find(
        t => t._id === navigation.getParam('_id')
    );

    const initialCoords = track.location[0].coords;

    return <>
        <Spacer>
            <Text style={{ fontSize: 38 }} > {track.name}</Text>
        </Spacer>

        <MapView
            initialRegion={
                {
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initialCoords
                }}
            style={styles.map}
        >
            <Polyline coordinates={track.location.map(loc => loc.coords)}></Polyline>

        </MapView>
    </>
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default TrackDetailScreen;


