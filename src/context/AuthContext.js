import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';
import { navigate } from '../navigationReference';

const authReducer = (state, action) => {

    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signin':
            return { errorMessage: '', token: action.payload };
        case 'clear_message':
            return { ...state, errorMessage: '' };
        case 'sign_out':
            return { token: null, errorMessage: '' };
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token });
        navigate('TrackList');
    } else {
        navigate('Singup');
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_message' });
};

const signup = dispatch => async ({ email, password }) => {

    // make api request for sign up // if sign up success, modify state that we authenticated // if fails then return error message
    try {
        const response = await trackerAPI.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token); // save user_token to local storage
        dispatch({ type: 'signin', payload: response.data.token });

        navigate('TrackList'); // navigate to main screen

    } catch (err) {
        console.log(err);
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' });
    }
};

const signIn = dispatch => async ({ email, password }) => {

    // make api request for sign in if sign in success,  // modify state that we authenticated, if fails then return error message

    try {
        const response = await trackerAPI.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token); // save user_token to local storage
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('TrackList'); // navigate to main screen

    } catch (err) {
        console.log(err);
        dispatch({
            type: 'add_error',
            payload: 'Something went wrong with sign in ' + err.response.data
        });
    }
};

const signOut = (dispatch) => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'sign_out' });

    navigate('loginFlow');
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signIn, signup, signOut, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: '' }
);