# Module 9 - Authentication

## Summary

In this module, we add login methods with JWT tokens for user authentication, protected frontend routes and views for site admin, and JWT-protected backend API routes for site admin.

## Phases

1. Login view: Add view for login page and login status icon on header bar
2. Contact form: Add a backend handler for contact form, and a "form submitted" action on the frontend
3. Login handler: Add a placeholder backend handler for site login form
4. Login/logout handlers: Add login/logout handlers with simple password authentication & cookies
5. Password encryption: Add basic password encryption
6. JWT tokens: Add JWT authentication
7. Protected routes: add admin logged-in view with protected routes
8. Add admin management views for blog posts, users, and projects.

# Steps

- 9.1 - Login component and route
  - add an `npm install:all` script to install frontend and backend dependencies
  - create login view and route in frontend
  - add a Login menu item on Navigation bar
  - improve styles on Login page form and Contact form
- 9.2 - Add backend handler and route for contact form
  - add a /contact route to backend
  - add a /controllers directory in backend, and add placeholder handlers for login, logout, and contact
  - add `validator` library, and validate email in contact form handler
- 9.2 - Add backend handlers for /login, /logout
