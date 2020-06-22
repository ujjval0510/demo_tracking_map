import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacers';
import { Context as AuthContext } from '../context/AuthContext';
import { SafeAreaView } from 'react-navigation';

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

const styles = StyleSheet.create({

});

export default AccountScreen;


