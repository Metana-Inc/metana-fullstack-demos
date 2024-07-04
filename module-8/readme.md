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
  - Add styles to Navigation.js

- 8.6 - Add page layout wrapper

  - add a Layout.js file
  - wrap all views in layout
  - include navigation bar and footer in layout

- 8.7 - Add API backend

  - add axios library
  - add http-proxy-middleware
  - change backend route urls to /api prefix
  - setup proxy middleware to backend API server and port
  - load blogs data from API in /blogs view

- 8.8 - Add Blog item view
- 8.9 - Add TailwindCSS for styling

  - install tailwindcss
  - add filetypes to tailwind config

## Todos

Pages

- [x] Add page: about
- [x] Add page: contact
- [x] Add 404 page

Server

- [x] Break out router for blogs,
- [x] Add layout

API

- [x] Get data from API backend
- [x] Implement data for /blogs, /users in frontend

Components

- [x] Add component: Navigation bar
- [x] Add component: Footer
- [ ] Add component: Contact form
- [ ] Add component: User bio

Projects section

- [ ] Add page: projects index
- [ ] Add page: project single

Blogs section

- [x] Add page: blogs index
- [ ] Add page: blog single

Styling

- [x] install TailwindCSS
- [x] include tailwind in project build
