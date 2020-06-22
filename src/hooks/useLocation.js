import { useEffect, useState } from 'react';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

export default (shouldTrack, callback) => {

    const [error, setError] = useState(null);

    useEffect(() => {

        let subscriber;

        const startWatching = async () => {
            try {
                await requestPermissionsAsync();  // ask permission from user

                subscriber = await watchPositionAsync(
                    {
                        accuracy: Accuracy.BestForNavigation,
                        timeInterval: 1000, // every 10sec
                        distanceInterval: 10 // every 10meter
                    },
                    // (location) => {         // Get update user position in map
                    //     console.log(location);
                    //     addRecordedLocation(location);
                    // }
                    callback
                );
                // setSubscriber(sub);
            } catch (err) {
                setError(err);
            }
        };


        if (shouldTrack) {
            startWatching();
        } else {
            if (subscriber) {
                subscriber.remove();
            }
            subscriber = null;
        }

        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        };
    }, [shouldTrack, callback]);

    return [error];
};
