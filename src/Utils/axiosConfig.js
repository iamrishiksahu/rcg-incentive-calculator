import axios from 'axios'

const axiosp = axios.create({
    baseURL: 'https://dummyjson.com/',
});

export default axiosp;

