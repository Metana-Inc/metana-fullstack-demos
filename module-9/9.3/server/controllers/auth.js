// Handlers for login/logout and authentication
import validator from 'validator';

// Log in the user by email and password
export async function login({ email, password }) {
  if (!email || !password) {
    throw new Error('email and password are required');
  }
  // Validate input
  try {
    const emailValid = validator.isEmail(email);
    const passwordValid = !validator.isEmpty(password);
    if (!emailValid || !passwordValid) {
      throw new Error('validation failed');
    }
  } catch (err) {
    throw new Error('login failed');
  }

  console.log('=== debug: email, password: ', { email, password });
}

// Log out the currently logged in user
export async function logout() {}
