// Routes for the Blogs API
import express from "express";
const usersRouter = express.Router();
import {
  users,
  getUsers,
  getUserById,
  addUser,
  deleteUser,
  updateUser,
  getUserByEmail,
} from "../data/users.js";

// All these routes will be scoped under /api/user in index.js

// Get all users
usersRouter.get("/", (req, res) => {
  const data = getUsers();
  res.json(data);
});

// Get single user
usersRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = getUserById(id);
  if (!user) {
    return res.status(404).json({ error: "user not found" });
  }
  res.status(200).json(user);
});

// Post new user
usersRouter.post("/", (req, res) => {
  try {
    const { name, email, role } = req.body;
    // Validate content
    if (!name || !email) {
      throw new Error("required values: user or email are empty");
    }

    // Validate user doesn't exist already
    const existing = getUserByEmail(email);
    if (!!existing) {
      throw new Error("user with email exists");
    }

    // Adding the user
    const user = addUser({ name, email, role });

    console.log("posted user: ", user);
  } catch (err) {
    return res.status(400).json({
      error: err.toString(),
    });
  }
  res.json(users);
});

// Get single user
usersRouter.get("/:id", (req, res) => {
  const user = getUserById(req.params.id);
  if (!user) {
    return res.status(404).json({ error: "user not found" });
  }
  res.status(200).json(user);
});

// Update single user
usersRouter.put("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, role } = req.body;
    // Validate content
    if (!id || !name || !email) {
      throw new Error("required values: user or email are empty");
    }
    const existing = getUserById(id);
    if (!existing) {
      throw new Error(`user with id ${id} not found`);
    }
    // Update the record
    const updated = updateUser({ id, name, email, role });
    console.log(`updated user: ${updated}`);
    res.status(200).json(updated);
  } catch (err) {
    return res.status(400).json({
      error: err.toString(),
    });
  }
});

// Delete single user
usersRouter.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const user = getUserById(id);
    if (!user) {
      return res.status(200).json({});
    }
    const deleted = deleteUser(user);
    console.log(`deleted user: ${id}`);
    res.status(200).json(deleted); // return the deleted user JSON if there was a record
  } catch (err) {
    return res.status(400).json({
      error: err.toString(),
    });
  }
});

export default usersRouter;
