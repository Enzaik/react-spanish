import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://spanish-85a9a.firebaseio.com/'
});

export default instance;