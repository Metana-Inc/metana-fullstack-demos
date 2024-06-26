// Demo Express REST API with Mongo backend
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Import morgan for logging
import morgan from 'morgan';

// Import the PostgreSQL database connection
import db from './db/dbconn.js'; 

const app = express();
import { PORT } from './config.js';
import blogsRouter from './routes/blogsRouter.js';
import usersRouter from './routes/usersRouter.js';

app.use(cors());

// Configure body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure morgan (combined, common, dev, short, tiny)
app.use(morgan('combined'));

// blog routes
app.use('/blogs', blogsRouter);

// user routes
app.use('/users', usersRouter);

// Index route
app.get('/', (req, res) => {
  res.send('Hello from index page');
});

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
