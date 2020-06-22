import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Spacer from './Spacers';

const NavLink = ({ navigation, text, routeName }) => {

    return (
        <>
            <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
                <Spacer>
                    <Text style={styles.textStyle}> {text}</Text>
                </Spacer>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        color: 'blue',
        fontSize: 18
    }
});

export default withNavigation(NavLink);
