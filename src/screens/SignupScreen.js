import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthFrom from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';


const SignupScreen = ({ navigation }) => {

    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.containers}>

            <NavigationEvents
                //onWillFocus={() => { }}  : call when navigate to sign in screen
                // onDidFocus={() => { }}  : call when navigate to sign in screen transition complete
                onWillBlur={clearErrorMessage}   // call when go away from sign in screen
                // onDidBlur={() => { }}  :  // call when go away from sign in screen transition complete
            />

            <AuthFrom
                headerTitle="Sign up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            />

            <NavLink
                routeName="Singin"
                text="Have Account, Sign In."
            />

        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    containers: {
        flex: 1,
        marginBottom: 250,
        justifyContent: 'center'
    },

    textStyle: {
        flex: 1,
        textAlign: 'center',
        color: 'red',
        fontSize: 18
    },

    errorMessageStyle: {
        marginLeft: 10,
        color: 'red',
        fontSize: 16
    }
});

export default SignupScreen;


