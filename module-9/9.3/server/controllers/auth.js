// Handlers for login/logout and authentication
import validator from 'validator';
import User from '../models/User.js';

// Validate the user credentials by plaintext password.
// Returns user on success
async function authenticateUser({ email, password }) {
  const user = await User.findOne({ email: email });
  if (user && user?.password === password) {
    return user;
  }
}

// Log in the user by email and password. Sets cookie with user details on success
export async function login({ res, email, password }) {
  if (!email || !password) {
    throw new Error('email and password are required');
  }
  // Validate input
  const emailValid = validator.isEmail(email);
  const passwordValid = !validator.isEmpty(password);
  if (!emailValid || !passwordValid) {
    throw new Error('validation failed');
  }
  // Authenticate the user by password
  const user = await authenticateUser({ email, password });
  if (!user) {
    throw new Error('username or password invalid');
  }
  res.cookie('user', JSON.stringify(user));
  console.log('login successful');
  return user;
}

// Log out the currently logged in user
export async function logout(res) {
  res.clearCookie('user');
  console.log('logged out');
}
