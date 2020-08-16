import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:1213',
});

export default api;
