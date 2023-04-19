import axios from 'axios';
import baseUrl from '../Api/api';

const instance = axios.create({
  baseURL: baseUrl,
});

export const AxiosAdmin = axios.create({
  baseURL:"http://localhost:8080/admin"
})
export const AxiosClient = axios.create({
  baseURL:baseUrl
})

export default instance;