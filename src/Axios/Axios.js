import axios from 'axios';
import baseUrl from '../Api/api';

const instance = axios.create({
  baseURL: baseUrl,
});

export const AxiosAdmin = axios.create({
  baseURL:"https://doccure.onrender.com/admin"
})
export const AxiosClient = axios.create({
  baseURL:baseUrl
})
export const AxiosDoctor = axios.create({
  baseURL:"https://doccure.onrender.com/doctors"
})


export const AxiosMessages = axios.create({
  baseURL:"https://doccure.onrender.com/messages"
})
export const AxiosConversations = axios.create({
  baseURL:"https://doccure.onrender.com/conversations"
})
export default instance;


