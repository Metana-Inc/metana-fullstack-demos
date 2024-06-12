// 4.4 - Express app serving HTML from files, with multiple paths
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const htmlDir = path.join(__dirname, 'public'); // All our html files are served from the /public directory

// Index page
app.get('/', function (req, res) {
  res.sendFile(path.join(htmlDir, 'index.html'));
});

// Hello page
app.get('/hello', function (req, res) {
  res.sendFile(path.join(htmlDir, 'hello.html'));
});

// Blog page
app.get('/blog', function (req, res) {
  res.sendFile(path.join(htmlDir, 'blog.html'));
});

// About page
app.get('/about', function (req, res) {
  res.sendFile(path.join(htmlDir, 'about.html'));
});

app.listen(PORT, function () {
  console.log(`Server started at http://localhost:${PORT}`);
});
