// Demo Express REST API with Mongo backend
const express = require('express');
const app = express();

// Simple Hello route
app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(3000, () => console.log('server started on port 3000'));
