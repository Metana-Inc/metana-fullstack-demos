// Demo Express REST API with Mongo backend
// const express = require('express');
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {
  blogs,
  addBlog,
  deleteBlog,
  updateBlog,
  blogsFindById,
} from './blogs.js';

const app = express();
import { PORT } from './config.js';
console.log(`=== debug: PORT: ${PORT}`);

app.use(cors());

// Configure body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Index route
app.get('/', (req, res) => {
  res.send('Hello from index page');
});

// GET blogs -- all
app.get('/blogs', (req, res) => {
  res.json(blogs);
});

// GET blog -- single
app.get('/blogs/:id', (req, res) => {
  const { id } = req.params;
  const blog = blogsFindById(id);
  if (!blog) {
    return res.status(404).json({ error: 'blog not found' });
  }
  res.status(200).json(blog);
});

// POST blog
app.post('/blogs', (req, res) => {
  try {
    const { title, content } = req.body;
    // Validate content
    if (!title || !content) {
      throw new Error('title or content is empty');
    }
    const blog = addBlog({ title, content });
    console.log(`posted blog: ${blog}`);
  } catch (err) {
    return res.status(400).json({
      error: err.toString(),
    });
  }
  res.json(blogs);
});

// GET blog -- single
app.get('/blogs/:id', (req, res) => {
  const { id } = req.params;
  const blog = blogsFindById(id);
  if (!blog) {
    return res.status(404).json({ error: 'blog not found' });
  }
  res.status(200).json(blog);
});

// UPDATE blog -- single
app.put('/blogs/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    // Validate content
    if (!title || !content) {
      throw new Error('title or content is empty');
    }
    const existing = blogsFindById(id);
    if (!existing) {
      throw new Error(`blog with id ${id} not found`);
    }
    // Update the record
    const updated = updateBlog({ id, title, content });
    console.log(`updated blog: ${updated}`);
    res.status(200).json(updated);
  } catch (err) {
    return res.status(400).json({
      error: err.toString(),
    });
  }
});

// DELETE blog -- single
app.delete('/blogs/:id', (req, res) => {
  try {
    const { id } = req.params;
    const blog = blogsFindById(id);
    deleteBlog(id);
    console.log(`deleted blog: ${id}`);
    res.status(200).json(blog || {}); // return the deleted blog JSON if there was a record
  } catch (err) {
    return res.status(400).json({
      error: err.toString(),
    });
  }
});

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
