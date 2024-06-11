// 4.6 - Express app with Mustache templates and dynamic urls
const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const PORT = 3000;

// We have to set the Express app to use Mustache for rendering
// We don't use res.Sendfile anymore -- we're rendering these templates into HTML now, using Mustache.
// The templates are stored in the /views directory by default, and we refer to them by name, without '.mustache'
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');

// Index page
app.get('/', function (req, res) {
  res.render('index');
});

// User page with dynamic userId parameters from url
app.get('/user/:userId', function (req, res) {
  const userId  = req.params.userId; // This gets the userId from the request url
  res.render('user', {userId: userId});
});

// Hello page with username extracted from query parameters
// These are everything that comes after the "?" in a url
app.get('/hello', function (req, res) {
  const name = req.query.name || "Anonymous User" 
  console.log(`query parameters: `, req.query);
  res.render('hello', {username: name});
});


app.listen(PORT, function () {
  console.log(`Server started at http://localhost:${PORT}`);
});
