import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://hw-64-c59d0.firebaseio.com/'
});

export default instance;