import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthFrom from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';


const SigninScreen = ({ navigation }) => {

    const { state, signIn, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.containers}>

            <NavigationEvents
                //onWillFocus={() => { }}  : call when navigate to sign in screen
                // onDidFocus={() => { }}  : call when navigate to sign in screen transition complete
                onWillBlur={clearErrorMessage}   // call when go away from sign in screen
            // onDidBlur={() => { }}  :  // call when go away from sign in screen transition complete
            />

            <AuthFrom
                headerTitle="Sign In for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign In"
                onSubmit={signIn}
            />

            <NavLink
                routeName="Singup"
                text="Don't Have Account, Sign Up"
            />

        </View>
    );

};


SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    containers: {
        flex: 1,
        marginBottom: 250,
        justifyContent: 'center'
    }
});

export default SigninScreen;


