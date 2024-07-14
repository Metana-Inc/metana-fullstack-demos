// Router for contact methods
import express from 'express';
const authRouter = express.Router();
import { login, logout } from '../controllers/auth.js';

// Log in with email and password
authRouter.post('/login', async (req, res) => {
  try {
    const { user, token } = await login(req, res); // this returns user and a JWT token
    res.status(200).json({
      success: true,
      message: 'login successful',
      data: {
        user,
        token,
      },
    });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

export default authRouter;
