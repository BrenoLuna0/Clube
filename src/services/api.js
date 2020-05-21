import axios from 'axios';

const api = axios.create({
    baseURL : 'http://192.168.15.8:3013/api'
});

export default api;