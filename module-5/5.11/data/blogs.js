// Dummy blogs data and associated functions

// Dummy blog posts
export var blogs = [
  { id: 1, title: 'Blog post 1', content: 'Example blog post 1.' },
  { id: 2, title: 'Blog post 2', content: 'Example blog post 2.' },
  { id: 3, title: 'Blog post 3', content: 'Example blog post 3.' },
  { id: 4, title: 'Blog post 4', content: 'Example blog post 4.' },
];

// Convert a string ID to int
export const toInt = (id) => parseInt(id, 10);

// Return the current max blog ID
const blogsMaxId = (id) => Math.max(...blogs.map((b) => b.id));

// Check if blog with a given ID exists
const blogExists = (id) => !!blogs.find((x) => x.id === id);

// Find a single blog by ID
export function blogsFindById(blogId) {
  blogId = toInt(blogId);
  return blogs.find((x) => x.id === blogId);
}

// Create a new blog object with ID following the last blog entry ID
export function newBlog({ id, title, content }) {
  const blogId = id || (blogsMaxId() || 0) + 1; // get ID of last blog item if not provided.
  return { id: blogId, title, content };
}

// Add a new entry to blogs array
export function addBlog({ title, content }) {
  const blog = newBlog({ title, content });
  blogs.push(blog);
  return blog;
}

// Update a single blog
export function updateBlog(updatedBlog) {
  const id = toInt(updatedBlog.id); // ensure it's an integer
  if (!blogExists(id)) {
    throw new Error(`blog with id ${id} not found`);
  }
  const filtered = blogs.filter((x) => x.id !== id); // filter array to remove this blog
  blogs = [...filtered, { ...updatedBlog, id }].sort((a, b) => a.id - b.id); // Add the updated blog and sort by id
  return updatedBlog;
}

// Delete a single blog from the array by id
export function deleteBlog(blogId) {
  blogId = toInt(blogId);
  blogs = blogs.filter((x) => x.id !== blogId); // filter by ID and replace the blogs array
}
