import React, { useContext } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import { Context as TrackContext } from '../context/TrackContext';

import { NavigationEvents } from 'react-navigation';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements';
import Spacer from '../components/Spacers';

const TrackListScreen = ({ navigation }) => {

    const { state, fetchTrack } = useContext(TrackContext);

    return (

        <View>

            <NavigationEvents onWillFocus={fetchTrack} />

            <Text style={{ fontSize: 38 }} > TrackListScreen</Text>

            <FlatList
                data={state}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return (
                        <Spacer>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate('TrackDetail', { _id: item._id })}>
                                <ListItem chevron title={item.name} />
                            </TouchableOpacity>
                        </Spacer>
                    );
                }}
            />

        </View>

    );
};

const styles = StyleSheet.create({});

export default TrackListScreen;


