// Demo Express REST API with Mongo backend
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// auth
import passport from 'passport';
import session from 'express-session';
import './auth/auth.js';

// Import morgan for logging
import morgan from 'morgan';

import { connectToDatabase } from './db/dbconn.js';

const app = express();
import { PORT, SESSION_SECRET } from './config.js';
import blogsRouter from './routes/blogsRouter.js';
import usersRouter from './routes/usersRouter.js';
import authRouter from './routes/authRouter.js';


app.use(cors());

// Configure body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure morgan (combined, common, dev, short, tiny)
app.use(morgan('combined'));

// Connect to MongoDB
await connectToDatabase();

// session middleware
app.use(
  session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 60000 },
  })
);

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// auth routes
app.use('/auth', authRouter);

// blog routes
app.use('/api/blogs', blogsRouter);

// user routes
app.use('/api/users', usersRouter);

app.listen(PORT, () => console.log(`backend server started on port ${PORT}`));
