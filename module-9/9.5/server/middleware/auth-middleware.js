// Middleware for authentication and authorization

// TODO: validate the user is logged in
export function isLoggedIn(req, res, next) {
  next();
}

// TODO: validate the logged in user has an admin role
export function isAdmin(req, res, next) {
  next();
}
