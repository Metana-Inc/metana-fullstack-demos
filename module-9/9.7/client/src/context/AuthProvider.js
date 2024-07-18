// Provider for Auth context
import { createContext, useContext, useState } from 'react';
import authAPI from '../api/authAPI';

// Define our AuthContext
const AuthContext = createContext({
  user: undefined,
  login: async () => {},
  logout: async () => {},
});

// Define our AuthContext Provider. This can be used to wrap the app to provide access to the AuthContext.
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState({});

  // Return previous user login and token from localstorage, if existing.
  async function loadPrevLogin() {
    console.log('=== debug: load previous login');
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('authToken');
    if (!user || !token) {
      console.log('=== debug: no previous login data');
    } else {
      console.log(
        `=== debug: previous login data: user: ${user} token: ${token}`
      );
      setUser(user);
      setToken(token);
    }
    return { user, token };
  }
  async function login({ email, password }) {
    const response = await authAPI.login({ email, password });
    if (!response.success) {
      throw new Error('login failed:', response?.message || 'unknown error');
    }
    const { user, token } = response.data;
    if (!user || !token) {
      throw new Error('response user or token is empty');
    }

    // Save user and auth token to localstorage
    console.log('login successful');
    localStorage.setItem('user', user);
    localStorage.setItem('authToken', token);

    // Save user and auth token to state
    setUser(user);
    setToken(token);

    return user;
  }
  async function logout() {
    try {
      localStorage.removeItem('user');
      localStorage.removeItem('authToken');
      console.log('logged out');
    } catch (err) {
      console.error('Logout error:', err);
    }
  }
  return (
    <AuthContext.Provider value={{ isLoggedIn, user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a hook we can use to get access to the AuthContext in our components.
export const useAuth = () => useContext(AuthContext);
