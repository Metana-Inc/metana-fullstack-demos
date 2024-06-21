## Module 5 - Express and Mongo API

Basic Express backend REST application, with Mongo DB backend.

## Setup:

1. Initialize project
2. Install express
3. Create index.js
4. Add routes: add a '/' hello world route, and set the app to listen on port 3000
5. Add a "start" script to package.json
6. Start your server: `npm start`
7. Use Postman or curl to test your API route.

## Sections

- 5.1 - Initialize Express app
- 5.2 - Add bodyParser and cors
- 5.3 - Add GET ALL blogs route
- 5.4 - Add GET blog, POST blog route
- 5.5 - Add blog data methods, convert project to ES6 modules
- 5.6 - Add UPDATE blog route
- 5.7 - Break out blogs data functions
- 5.8 - Add Nodemon, dotenv
- 5.9 - Move /blogs to new router
- 5.10 - Add /users routes
- 5.11 - Add logging middleware (Morgan)
- 5.12 - Add MongoDB backend in index.js, add placeholder DB connection credentials to example.env
- 5.13 - Add schemas for users and blogs

## Todo

- 5.x - add schemas for users and blogs
- 5.x - break out mongo to a separate /db/dbconn.js file
- 5.x - add seedDb.js script for users and blogs in /scripts
