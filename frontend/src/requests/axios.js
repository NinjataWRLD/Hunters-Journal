import axios from 'axios';

const serverURL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
    baseURL: serverURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;