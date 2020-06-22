import React, { useContext } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';


const Maps = () => {

    const { state: { currentLocation, location } } = useContext(LocationContext);
    
    // let points = [];
    // for (let i = 0; i < 20; i++) {
    //     if (i % 2 === 0) {
    //         points.push({
    //             latitude: 36.177769 + 1 * 0.001,
    //             longitude: 140.093735 + 1 * 0.001
    //         });
    //     } else {
    //         points.push({
    //             latitude: 36.177769 - 1 * 0.002,
    //             longitude: 140.093735 - 1 * 0.002
    //         });
    //     }
    // }

    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    }

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                // latitude: 36.177769,
                // longitude: 140.093735,
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            region={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >
            <Polyline coordinates={location.map(loc => loc.coords)} />
            
            <Circle
                center={currentLocation.coords}
                radius={30}
                fillColor="rgba(158,158,255,0.3)"
                strokeColor="rgba(158,158,255,1.0)"
            />
        </MapView>
    );
};


const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Maps;

