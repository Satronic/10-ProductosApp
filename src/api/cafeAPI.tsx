import axios from 'axios';


const baseURL = 'https://rn-backend-mern-cafe-production.up.railway.app/api';

const cafeAPI = axios.create({
    baseURL
})

export default cafeAPI;