import axios from 'axios';
import baseUrl from '../Api/api';

const instance = axios.create({
  baseURL: baseUrl,
});

export const AxiosAdmin = axios.create({
  // baseURL:"https://doccure.onrender.com/admin"
  baseURL:"http://localhost:8080/admin"
})
export const AxiosClient = axios.create({
  baseURL:baseUrl
})
export const AxiosDoctor = axios.create({
  // baseURL:"https://doccure.onrender.com/doctors"
  baseURL:"http://localhost:8080/doctors"
})


export const AxiosMessages = axios.create({
  // baseURL:"https://doccure.onrender.com/messages"
  baseURL:"http://localhost:8080/messages"
})
export const AxiosConversations = axios.create({
  // baseURL:"https://doccure.onrender.com/conversations"
  baseURL:"http://localhost:8080/conversations"
})
export default instance;


