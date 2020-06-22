// import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Maps';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackFrom from '../components/TrackForm';
import { Feather } from '@expo/vector-icons'; 


const TrackCreateScreen = ({ isFocused }) => {

    const { state: { recording }, addRecordedLocation } = useContext(LocationContext);

    const callback = useCallback(
        location => {
            addRecordedLocation(location, recording);
        },
        [recording]
    );

    const [error] = useLocation(isFocused || recording, callback);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>

            <Text style={{ fontSize: 38 }} > TrackCreateScreen</Text>

            <Map></Map>

            {error ? <Text > Provide location service</Text> : null}

            <TrackFrom />

        </SafeAreaView>
    );
};

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <Feather name="plus" size={20} color="black" />
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);


