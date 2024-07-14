// Middleware for authentication and authorization

import { isAuthenticated } from '../controllers/auth';

// Validate the user is logged in with a valid auth token
export function isLoggedIn(req, res, next) {
  if (!isAuthenticated(req)) {
    const error = new Error('login required');
    error.status = 401;
    return next(error);
  }
  console.log('login validation successful');
  next();
}

// TODO: validate the logged in user has an admin role
export function isAdmin(req, res, next) {
  next();
}
