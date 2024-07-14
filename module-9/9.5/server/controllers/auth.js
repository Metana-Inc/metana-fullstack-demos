// Handlers for login/logout and authentication
import validator from 'validator';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config.js';

// Validate the user credentials by plaintext password.
// Returns user and signed JWT token on success (without the password attribute.)
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

  // Generate a JWT token. We don't include the password in this token because it would be readable.
  const token = jwt.sign(
    {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: '1h' }
  );

  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
}

// Log in the user by email and password.
// On success, generate a JWT token with user details, and store to cookie.
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
  const result = await authenticateUser({ email, password });
  if (!result) {
    throw new Error('username or password invalid');
  }

  // Set the user and token to a cookie
  const data = JSON.stringify({ ...result }); // this includes user and token
  res.cookie('user', data);
  console.log('login successful');
  return data;
}

// Log out the currently logged in user
export async function logout(res) {
  res.clearCookie('user');
  console.log('logged out');
}
