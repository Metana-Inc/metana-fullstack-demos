// Demo Express REST API with Mongo backend
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Configure body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Dummy blog posts
var blogs = [
  { id: 1, title: 'Blog post 1', content: 'Example blog post 1.' },
  { id: 2, title: 'Blog post 2', content: 'Example blog post 2.' },
  { id: 3, title: 'Blog post 3', content: 'Example blog post 3.' },
  { id: 4, title: 'Blog post 4', content: 'Example blog post 4.' },
];

// Find a single blog by ID
function blogsFindById(blogId) {
  return blogs.find((x) => x.id.toString() === id);
}

// Get the ID of the last blog entry
function blogsLastId() {
  return blogs[blogs.length - 1]?.id || 0;
}

// Create a new blog object with ID following the last blog entry ID
function newBlog({ id, title, content }) {
  const blogId = id || blogsLastId() + 1; // get ID of last blog item if not provided.
  return {
    id: blogId,
    title,
    content,
  };
}

// Add a new entry to blogs array
function addBlog({ title, content }) {
  const blog = newBlog({ title, content });
  blogs.push(blog);
}

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
    const blog = newBlog({ title, content });
    addBlog(blog);
    console.log(`posted blog: ${blog}`);
  } catch (err) {
    return res.status(400).json({
      message: `invalid request: ${err.message}`,
    });
  }
  res.json(blogs);
});

app.listen(3000, () => console.log(`server started on port ${port}`));
