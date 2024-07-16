// Context provider for login/logout and authentication routes.
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiLogin } from '../api/auth.js';

// Our basic context. This keeps track of the user state and the login/logout functions.
const AuthContext = createContext({
  user: undefined,
  isLoggedIn: () => {},
  login: () => {},
  logout: () => {},
});

const saveAuthToken = (token) => {
  console.log('FIXME: Save Auth Token');
};

const clearAuthToken = () => {
  console.log('FIXME: Clear Auth Token');
};

// This is a context provider, which we'll use to wrap private routes
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();

  // Check if the user is authenticated
  const isLoggedIn = () => !!user;

  // Method to check if a user is logged in
  // Method that does the actual login, and stores the response data to localStorage
  const login = async ({ email, password }) => {
    try {
      console.log('=== debug: POST to /api/login ...');
      const { user, token } = await apiLogin({ email, password });
      console.log(`=== debug: user:`, user);
      console.log(`=== debug: token:`, token);
      setUser({
        id: profile.id,
        name: profile.name,
        email: profile.email,
        role: profile.role,
      });
      // Do something with the token
      saveAuthToken(token);
      console.log('login successful');
    } catch (err) {
      throw new Error('login failed: ', err.message);
    }
  };

  const logout = async () => {
    try {
      clearAuthToken();
      setUser(null);
      navigate('/login');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

//  We export the useAuth method to be conssumed by  pages that require authentication
export const useAuth = () => useContext(AuthContext);
