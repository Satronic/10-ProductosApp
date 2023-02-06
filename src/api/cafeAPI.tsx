import axios from 'axios';
// import useTokenStorage from '../hooks/useTokenStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';



const baseURL = 'https://rn-backend-mern-cafe-production.up.railway.app/api';

const cafeAPI = axios.create({
    baseURL
});

// Middleware que envia el token en cada solicitud
cafeAPI.interceptors.request.use(
    async (config) => {

        const token = await Promise.all([
            AsyncStorage.getItem('token')
        ])

        config.headers['x-token'] = token;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

export default cafeAPI;