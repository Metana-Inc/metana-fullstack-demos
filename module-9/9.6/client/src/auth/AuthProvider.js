// Context provider for login/logout and authentication routes.
import { apiLogin } from '../api/auth.js';

// Method that does the actual login, and stores the response data to localStorage
export async function login({ email, password }) {
  try {
    console.log('=== debug: POST to /api/login ...');
    const response = await apiLogin({ email, password });
    if (!response) {
      throw new Error('login failed -- response:', response);
    }
    const { user, token } = response;
    console.log(`=== debug: user:`, user);
    console.log(`=== debug: token:`, token);

    // Do something with the token
    console.log('login successful');
    saveAuthToken(token);
    return user;
  } catch (err) {
    console.error('login failed: ', err.message);
  }
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

// // Our basic context. This keeps track of the user state and the login/logout functions.
// const AuthContext = createContext({
//   user: undefined,
//   isLoggedIn: () => {},
//   login: async () => {
//     console.log('login was called');
//   },
//   logout: async () => {},
// });

// // This is a context provider, which we'll use to wrap private routes
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(undefined);
//   const navigate = useNavigate();

//   // Check if the user is authenticated
//   const isLoggedIn = () => !!user;

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// //  We export the useAuth method to be consumed by  pages that require authentication
// export const useAuth = () => useContext(AuthContext);
