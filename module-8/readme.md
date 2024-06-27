# Module 8 - Frontend development with React

## Summary

Building a React frontend for our API backend.

## Steps

1. Copy REST API backend from Module 6 into /backend directory. Update your .env settings
2. Create /frontend directory, and initialize a Node project
3. Build out a basic "hello" frontend route

## Sections

- 8.1 - Copy REST API backend to /server
- 8.2 - Initialize Node project in /client and create React app
- 8.3 - Add scripts and test running frontend from production build
- 8.4

  - added proxy to backend API from client
  - installed concurrently (as dev dependency)
  - added 'dev' script with `concurrently` to package.json
  - added placeholder views for pages: about, blogs, contact, home, projects
  - Remove react demo icon / landing page
  - Replaced default App.js with view of Home page

- 8.5 - Add router and nav links

  - Install react-router dom
  - Wrap it all in RouterProvider in index.js
  - add routes to App.js
  - Add Links to Navigation.js
  - Import Navigation to Home and test all links

- [x] Remove react demo icon / landing page
- [x] Add concurrently for dev server
- [x] Add /api proxy
- [ ] Add proper proxy middleware -- see create-react-app docs
- [x] Add /pages directory
- [ ] Add React router
- [x] Add placeholder pages
- [ ] Add page: Home
- [ ] Add page: blogs index
- [ ] Add page: blog single
- [ ] Add page: about
- [ ] Add page: contact
- [ ] Add page: projects index
- [ ] Add page: project single
- [ ] Add root route: https://reactrouter.com/en/main/start/tutorial
- [ ] Add 404 page
- [ ] Get data from API backend
- [ ] Implement data for /blogs, /users in frontend
- [ ] Break out router for blogs, index
- [ ] Add layout
- [ ] Add component: Navigation bar
- [ ] Add component: Footer
- [ ] Add component: Contact form
- [ ] Add component: User bio
