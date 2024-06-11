// 4.5 - Express app with Mustache templates
const express = require('express');
const path = require('path');
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

// Hello page - Sam
app.get('/hello-sam', function (req, res) {
  res.render('hello', {username: "Sam"});
});

// Hello page - Sue
app.get('/hello-sue', function (req, res) {
  res.render('hello', {username: "Sue"});
});

// Hello page - Tom
app.get('/hello-tom', function (req, res) {
  res.render('hello', {username: "Tom"});
});
// Hello page - Jerry
app.get('/hello-jerry', function (req, res) {
  res.render('hello', {username: "Jerry"});
});

app.listen(PORT, function () {
  console.log(`Server started at http://localhost:${PORT}`);
});
