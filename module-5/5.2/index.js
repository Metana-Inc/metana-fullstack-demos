// Demo Express REST API with Mongo backend
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Configure body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Simple Hello route
app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(3000, () => console.log(`server started on port ${port}`));
