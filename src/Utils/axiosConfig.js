import axios from 'axios'

const axiosp = axios.create({
    baseURL: 'http://103.110.127.142:8000/',
});

export default axiosp;

