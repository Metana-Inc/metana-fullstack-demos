// 4.6 - Express app with Mustache templates and partials
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const PORT = 3000;


// Set the view engine for express to use Handlebars
app.engine('hbs', exphbs.engine({
  defaultLayout: 'main', // this looks for a template called "main" in the /views/layouts folder
  extname: '.hbs' // We're specifying the file extension as '.hbs' for brevity
}));

app.set('view engine', 'hbs');

// Index page
app.get('/', function (req, res) {
  res.render('index');
});

// User page with dynamic userId parameters from url
app.get('/user/:userId', function (req, res) {
  const users = [
    { userId: 1, name: 'John', email: 'john@example.com' },
    { userId: 2, name: 'Jack', email: 'jack@example.com' },
    { userId: 3, name: 'Sara', email: 'sara@example.com' },
    { userId: 4, name: 'Lily', email: 'lily@example.com' },
    { userId: 4, name: 'Susan', email: 'susan@example.com' },
  ]
  const userId  = req.params.userId; // This gets the userId from the request url
  var user = users.find((u) => u.userId === userId) // Filter the users array for a matching user by ID
  console.log(`userId route parameter: `, userId);
  console.log(`user: `, user);
  res.render('user', {user: user});
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
