import axios from 'axios'

const axiosp = axios.create({
    baseURL: 'http://localhost:8000/',
});

export default axiosp;

