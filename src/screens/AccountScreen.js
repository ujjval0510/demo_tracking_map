import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacers';
import { Context as AuthContext } from '../context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import { EvilIcons } from '@expo/vector-icons'; 

const AccountScreen = () => {

    const { signOut } = useContext(AuthContext);

    return (

        <SafeAreaView forceInset={{ top: 'always' }}>

            <Text style={{ fontSize: 38 }} > Account Screen</Text>

            <Spacer>
                <Button
                    title="Sign out"
                    onPress={signOut}
                />
            </Spacer>

        </SafeAreaView>

    );
};

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <EvilIcons name="gear" size={20} />
};

const styles = StyleSheet.create({

});

export default AccountScreen;


