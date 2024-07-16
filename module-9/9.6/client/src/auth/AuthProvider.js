// Context provider for login/logout and authentication routes.

import authAPI from '../api/authAPI';

// Method that does the actual login, and stores the response data to localStorage
export async function login({ email, password }) {
  console.log('=== debug: POST to /api/login ...');
  const response = await authAPI.login({ email, password });
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

  // Save auth token to localstorage
  console.log('login successful');
  localStorage.setItem('authToken', token);

  return user;
}

// Clear auth token from localstorage
export async function logout() {
  try {
    localStorage.clearItem('authToken');
    console.log('logged out');
  } catch (err) {
    console.error('Logout error:', err);
  }
}
