// Demo Express REST API with Mongo backend
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Import morgan for logging
import morgan from 'morgan';

import { connectToDatabase } from './db/dbconn.js';
import { PORT } from './config.js';
import blogsRouter from './routes/blogsRouter.js';
import usersRouter from './routes/usersRouter.js';
import contactRouter from './routes/contactRouter.js';
import authRouter from './routes/authRouter.js';

// Middleware
import { isLoggedIn } from './middleware/auth-middleware.js';

const app = express();

app.use(cors());

// Configure body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure morgan (combined, common, dev, short, tiny)
app.use(morgan('combined'));

// Function to start the server
async function startServer() {
  // Connect to MongoDB
  await connectToDatabase();

  // blog routes
  app.use('/api/blogs', blogsRouter);

  // user routes
  app.use('/api/users', usersRouter);

  // contact form submission route
  app.use('/api/contact', contactRouter);

  // Login/logout and authentication routes
  app.use('/api', authRouter);

  // Example private route
  app.get('/api/private', isLoggedIn, (req, res) => {
    res.status(200).json({ success: true, message: 'this is a private route' });
  });

  app.listen(PORT, () => console.log(`backend server started on port ${PORT}`));
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

export default app;
