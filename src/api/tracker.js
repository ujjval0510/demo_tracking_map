import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
    baseURL: 'https://7da81e213978.ngrok.io'
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