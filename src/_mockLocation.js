import * as Location from 'expo-location';

const tenMeterWithDegree = 0.0001;

const getLocation = increment => {
    return {
        timestamp: 100000,
        coords: {
            latitude: 36.177769 + increment * tenMeterWithDegree,
            longitude: 140.093735 + increment * tenMeterWithDegree,
            altitudeAccuracy: 5,
            altitude: 5,
            accuracy: 5,
            heading: 0,
            speed: 0
        }
    };
};



let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000);