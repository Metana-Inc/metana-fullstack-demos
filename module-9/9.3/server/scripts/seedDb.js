import mongoose from 'mongoose';
import User from '../models/User.js';
import Blog from '../models/Blog.js';
import { MONGO_URI } from '../config.js';

mongoose.connect(`${MONGO_URI}`);

const users = [
  {
    name: 'Admin John Doe',
    email: 'test@gmail.com',
    password: 'password1',
    role: 'admin',
  },
  {
    name: 'Normal Jane Doe',
    email: 'testuser@gmail.com',
    password: 'password1',
    role: 'normal',
  },
];

const blogs = [
  {
    title: 'Blog 1',
    content: 'Content of Blog 1',
  },
  {
    title: 'Blog 2',
    content: 'Content of Blog 2',
  },
];

User.insertMany(users)
  .then((users) => {
    console.log('Users seeded:', users);
    const blogsWithUsers = blogs.map((blog, index) => {
      blog.user = users[index]._id;
      return blog;
    });
    return Blog.insertMany(blogsWithUsers);
  })
  .then((blogs) => {
    console.log('Blogs seeded:', blogs);
  })
  .catch((error) => {
    console.error('Error seeding database:', error);
  })
  .finally(() => {
    mongoose.connection.close();
  });
