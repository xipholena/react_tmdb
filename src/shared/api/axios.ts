import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use((config) => {
  const token = process.env.TOKEN;
  if (token) {
    config.headers.set('Authorization', `Bearer ${token}`);
  }
  return config;
});
