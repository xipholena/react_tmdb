import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_TOKEN;
  if (token) {
    config.headers.set('Authorization', `Bearer ${token}`);
  }
  return config;
});
