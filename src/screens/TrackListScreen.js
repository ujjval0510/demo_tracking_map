import React, { useContext } from 'react';
import { View, StyleSheet} from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import { NavigationEvents } from 'react-navigation';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements';

const TrackListScreen = ({ navigation }) => {

    const { state, fetchTrack } = useContext(TrackContext);

    return (

        <View>
        
            <NavigationEvents onWillFocus={fetchTrack} />

            <FlatList
                data={state}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('TrackDetail', { _id: item._id })}>
                            <ListItem style={{ margin: 5 }} chevron title={item.name} />
                        </TouchableOpacity>
                    );
                }}
            />

        </View>

    );
};

const styles = StyleSheet.create({});

export default TrackListScreen;


