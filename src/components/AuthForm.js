import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import Spacer from '../components/Spacers';

const AuthFrom = ({ headerTitle, errorMessage, submitButtonText, onSubmit }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View >

            <Spacer>
                <Text h4 > {headerTitle}</Text>
            </Spacer>

            <Spacer />

            <Input
                label="Email"
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={setEmail}
            />

            <Input
                label="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                value={password}
                onChangeText={setPassword}

            />

            {errorMessage ? <Text style={styles.errorMessageStyle}> {errorMessage} </Text> : null}

            <Spacer>
                <Button
                    title={submitButtonText}
                    onPress={() => onSubmit({ email, password })}
                />
            </Spacer>

        </View>

    );
};


const styles = StyleSheet.create({
    containers: {
        flex: 1,
        marginBottom :250,
        borderColor : 'red',
        borderWidth :1,
        justifyContent:'center'
    },

    errorMessageStyle: {
        marginLeft: 10,
        color: 'red',
        fontSize: 16
    }
});

export default AuthFrom;