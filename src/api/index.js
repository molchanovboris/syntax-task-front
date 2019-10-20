import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'http://localhost:5000' });

axiosInstance.interceptors.request.use((config) => {
  // Do something before request is sent
  config.headers.token = localStorage.getItem('token');
  return config;
}, (error) =>
  // Do something with request error

  Promise.reject(error));


export default axiosInstance;
