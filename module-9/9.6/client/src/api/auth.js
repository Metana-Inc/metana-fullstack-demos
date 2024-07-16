// Placeholder for auth API
import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

// Login through the backend API and return the response data
export async function login({ email, password }) {
  const response = await API.post('/login', { email, password });
  if (response.status === 200) {
    console.log('/api/login success');
    return response.data;
  }
  console.log(`/api/login failure: `, response);
  return false;
}
