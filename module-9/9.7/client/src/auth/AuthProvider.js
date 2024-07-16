// Context provider for login/logout and authentication routes.

import authAPI from '../api/authAPI';

// Return previous user login and token from localstorage, if existing.
export function loadPrevLogin() {
  console.log('=== debug: load previous login');
  const user = localStorage.getItem('user');
  const token = localStorage.getItem('authToken');
  if (!user || !token) {
    console.log('=== debug: no previous login data');
  } else {
    console.log(
      `=== debug: previous login data: user: ${user} token: ${token}`
    );
  }
  return { user, token };
}

// Method that does the actual login, and stores the response data to localStorage
export async function login({ email, password }) {
  const response = await authAPI.login({ email, password });
  if (!response.success) {
    throw new Error('login failed:', response?.message || 'unknown error');
  }
  const { user, token } = response.data;
  if (!user || !token) {
    throw new Error('response user or token is empty');
  }

  // Save auth token to localstorage
  console.log('login successful');
  localStorage.setItem('user', user);
  localStorage.setItem('authToken', token);

  return user;
}

// Clear auth token from localstorage
export async function logout() {
  try {
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    console.log('logged out');
  } catch (err) {
    console.error('Logout error:', err);
  }
}
