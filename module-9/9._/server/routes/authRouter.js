import express from 'express';
import passport from 'passport';

const authRouter = express.Router();

// initiate google oauth login
authRouter.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

// callback route for google to redirect to
authRouter.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('http://localhost:3000/');
  }
);

export default authRouter;
