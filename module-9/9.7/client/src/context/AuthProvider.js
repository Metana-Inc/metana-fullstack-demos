// Provider for Auth context
import { createContext, useContext, useState } from 'react';

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
  async function login() {}
  async function logout() {}
  return (
    <AuthContext.Provider value={{ isLoggedIn, user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a hook we can use to get access to the AuthContext in our components.
export const useAuth = () => useContext(AuthContext);
