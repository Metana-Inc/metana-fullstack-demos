// Router for contact methods
import express from 'express';
import { handleSubmitContact } from '../controllers/contact.js';
const contactRouter = express.Router();

// Handler for contact form submission
contactRouter.post('/', async (req, res) => {
  const { email, firstName, lastName, comments } = req.body;
  try {
    await handleSubmitContact({ email, firstName, lastName, comments });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default contactRouter;
