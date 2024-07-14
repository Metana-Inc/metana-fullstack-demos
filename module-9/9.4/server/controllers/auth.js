// Handlers for login/logout and authentication
import validator from 'validator';
import User from '../models/User.js';
import bcrypt from 'bcrypt';

// Validate the user credentials by plaintext password.
// Returns user on success
async function authenticateUser({ email, password }) {
  const user = await User.findOne({ email: email });
  if (!user) {
    console.log('user not found: ', email);
    return;
  }
  const passwordValid = await bcrypt.compare(password, user.password);
  if (!passwordValid) {
    console.log('invalid password for user: ', email);
    return;
  }
  return user;
}

// Log in the user by email and password. Sets cookie with user details on success
export async function login(req, res) {
  const { email, password } = req.body;
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
