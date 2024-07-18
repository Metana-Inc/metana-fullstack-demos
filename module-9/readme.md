# Module 9 - Authentication

## Summary

In this module, we add login methods with JWT tokens for user authentication, protected frontend routes and views for site admin, and JWT-protected backend API routes for site admin.

## Phases

1. Login view: Add view for login page and login status icon on header bar
2. Contact form: Add a backend handler for contact form, and a "form submitted" action on the frontend
3. Login handler: Add a placeholder backend handler for site login form
4. Login/logout handlers: Add login/logout handlers with simple password authentication & cookies
5. Password encryption: Add basic password hashing for users
6. JWT tokens: Add JWT authentication
7. Protected routes: add admin logged-in view with protected routes
8. Add admin management views for blog posts, users, and projects.

# Steps

- 9.1 - Login component and route
  - scripts: add an `npm install:all` script to install frontend and backend dependencies
  - login route: create login view and route in frontend
  - contact route: create contact view and route in frontend
  - navigation: add Login and Contact menu items on Navigation bar
  - login and contact forms: improve styles on Login page form and Contact form
- 9.2 - Backend: Contact form handler
  - contact router: add a contactRouter.js to /routes
  - add contact and auth controllers: add a new /controllers directory, and add files contact.js and auth.js.
  - auth and contact handlers: add placeholder functions for login, logout in auth.js, and contact in contact.js
  - validation: add `validator` library, and add sanitization and validation functions on contact form input
- 9.3 - Backend: Simple password-based login/logout methods with cookies
  - add auth router
  - add login/logout methods to auth controller -- perform basic check against plaintext email/password
  - add cookieparser library, cookie-based storage of login state from login method
- 9.4 - Backend: Add password hashing
  - add bcrypt library
  - hash passwords on user create/update routes
  - add password hashing on seed function
  - use hashed password comparison on /login method
- 9.5 - Backend: Add JWT tokens and auth middlewares
  - add isAdmin middleware
  - add isLoggedIn middleware
  - add middlewares to protected routes
  - remove cookie-based login storage
  - remove /logout route
- 9.6 - Add frontend auth mechanism
  - add client /api routes with authAPI.js, blogsAPI.js, and usersAPI.js placeholders
  - add client /login method to /api/authAPI.js to call API backend
  - add client /controllers directory
  - add /controllers/auth.js and basic login/logout functions
  - add form handler logic in Login page to call API login method
- 9.7 - Add Auth context and persistent storage of auth tokens
  - add methods to store auth tokens in localStorage
  - add AuthProvider and AuthContext in /context
  - wrap App in AuthProvider context
  - add auth context to Login form
  - move login/logout logic into AuthProvider
- 9.8 - Frontend: add protected React routes
  - add ProtectedRoute wrapper in /components, with auth check or redirect to login page
  - add example Profile page and route
  - add ExamplePrivatePage page and route
  - wrap Profile page and ExamplePrivatePage page in ProtectedRoute, inside App routes
  - add ExamplePrivatePage to navigation menu
  - add /api/privateAPI.js and example private API function
  - add async API call to an private API endpoint, with authorization token in ExamplePrivatePage
