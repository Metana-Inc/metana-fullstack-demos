import express from 'express';
import User from '../models/User.js';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const usersRouter = express.Router();

// Get all users
usersRouter.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single user by mongodb _id
usersRouter.get('/:id', async (req, res) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.params.id); // Convert id to ObjectId
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Post new user
usersRouter.post('/', async (req, res) => {
  try {
    const { name, email, role, password } = req.body;
    if (!name || !email || !name || !password) {
      throw new Error('user values cannot be empty');
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Store new user with hashed password
    const newUser = new User({ name, email, role, hashedPassword });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update single user
usersRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, role, password } = req.body;
    if (!name || !email || !name || !password) {
      throw new Error('user values cannot be empty');
    }

    // Todo: validate current user has rights to modify user roles
    if (role) {
      const prevUser = User.findOne({ email: email });
      if (prevUser && prevUser.role !== role) {
        console.log(
          '[warning] -- user role updated. FIXME: should be admin-only operation'
        );
      }
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update user
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, role, password: hashedPassword },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete single user
usersRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    res.json(deletedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default usersRouter;
