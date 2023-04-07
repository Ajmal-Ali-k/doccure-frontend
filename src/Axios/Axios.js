import axios from 'axios';
import baseUrl from '../Api/api';

const instance = axios.create({
  baseURL: baseUrl,
});


export default instance;