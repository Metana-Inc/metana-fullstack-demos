import express from 'express';
import { getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog } from '../db/blogQueries.js';

const blogsRouter = express.Router();

// Get all blogs
blogsRouter.get('/', async (req, res) => {
  try {
    const blogs = await getAllBlogs();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single blog by ID
blogsRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await getBlogById(id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Post new blog
blogsRouter.post('/', async (req, res) => {
  try {
    const { title, content, user_id } = req.body;
    const newBlog = await createBlog(title, content, user_id);
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update single blog
blogsRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedBlog = await updateBlog(id, title, content);
    if (!updatedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(updatedBlog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete single blog
blogsRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBlog = await deleteBlog(id);
    if (!deletedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(deletedBlog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default blogsRouter;
