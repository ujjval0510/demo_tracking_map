import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
    baseURL: 'http://73c470aa4278.ngrok.io'
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        // automatically addedd token in every api request if user is logged in 
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }, (err) => {
        console.log(err);
        return Promise.reject(err);
    }
);


export default instance;