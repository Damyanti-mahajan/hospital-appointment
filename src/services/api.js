import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const register = (data) => api.post('/auth/register', data);
export const login = (data) => api.post('/auth/login', data);
export const bookAppointment = (data) => api.post('/appointments/book', data);
export const cancelAppointment = (id) => api.post(`/appointments/cancel/${id}`);
export const getAppointments = () => api.get('/appointments');

export default api;