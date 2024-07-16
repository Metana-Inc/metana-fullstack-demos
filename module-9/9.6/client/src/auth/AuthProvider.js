// Context provider for login/logout and authentication routes.
import { apiLogin } from '../api/auth.js';

// Method that does the actual login, and stores the response data to localStorage
export async function login({ email, password }) {
  console.log('=== debug: POST to /api/login ...');
  const response = await apiLogin({ email, password });
  console.log(`=== debug: API response:`, response);
  if (!response.success) {
    throw new Error('login failed:', response?.message || 'unknown error');
  }
  const { user, token } = response.data;
  if (!user || !token) {
    throw new Error('response user or token is empty');
  }
  console.log(`=== debug: user:`, user);
  console.log(`=== debug: token:`, token);

  // Do something with the token
  console.log('login successful');
  saveAuthToken(token);
  return user;
}

export async function logout() {
  try {
    clearAuthToken();
  } catch (err) {
    console.error('Logout error:', err);
  }
}

const saveAuthToken = (token) => {
  console.log('FIXME: Save Auth Token');
};

const clearAuthToken = () => {
  console.log('FIXME: Clear Auth Token');
};
