import pg from 'pg';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid'; // Import the UUID package for generating UUIDs for users

dotenv.config();

const {
  POSTGRES_URL,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DB,
} = process.env;

const db = new pg.Pool({
  connectionString: `postgresql://postgres:Minion22740@localhost:5432/metana-demo?schema=public`,
});

// Define your users and blogs data
const users = [
  {
    id: uuidv4(), //  Generate a UUID for each user
    name: 'Admin John Doe',
    email: 'test@gmxail.com',
    role: 'admin',
  },
  {
    id: uuidv4(),
    name: 'Normal Jane Doe',
    email: 'testuser@gmaxil.com',
    role: 'normal',
  },
];

const blogs = [
  {
    title: 'Blog 1',
    content: 'Content of Blog 1',
    user_id: null, // Will be populated with actual user IDs
  },
  {
    title: 'Blog 2',
    content: 'Content of Blog 2',
    user_id: null,
  },
];

// Function to seed users
const seedUsers = async () => {
  try {
    // Drop users table (optional, only if you want to start fresh)
    await db.query('DROP TABLE IF EXISTS users CASCADE');

    // Create users table
    await db.query(`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        role VARCHAR(50) DEFAULT 'normal' CHECK (role IN ('admin', 'normal')),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Insert users into the table
    const insertQuery = `
      INSERT INTO users (id, name, email, role)
      VALUES ($1, $2, $3, $4)
    `;

    await Promise.all(
      users.map(async (user) => {
        await db.query(insertQuery, [
          user.id,
          user.name,
          user.email,
          user.role,
        ]);
      })
    );

    console.log('Users seeded successfully');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};

// Function to seed blogs
const seedBlogs = async () => {
  try {
    // Drop blogs table (optional, only if you want to start fresh)
    await db.query('DROP TABLE IF EXISTS blogs CASCADE');

    // Create blogs table
    await db.query(`
      CREATE TABLE IF NOT EXISTS blogs (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        user_id UUID REFERENCES users(id) ON DELETE CASCADE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Get all users from the database to populate user_id in blogs
    const { rows: dbUsers } = await db.query('SELECT id FROM users');

    // Map user IDs to blogs
    const blogsWithUsers = blogs.map((blog, index) => {
      blog.user_id = dbUsers[index].id;
      return blog;
    });

    // Insert blogs into the table
    const insertQuery = `
      INSERT INTO blogs (title, content, user_id)
      VALUES ($1, $2, $3)
    `;

    await Promise.all(
      blogsWithUsers.map(async (blog) => {
        await db.query(insertQuery, [blog.title, blog.content, blog.user_id]);
      })
    );

    console.log('Blogs seeded successfully');
  } catch (error) {
    console.error('Error seeding blogs:', error);
  }
};

// Seed the database (users first, then blogs)
const seedDatabase = async () => {
  await seedUsers();
  await seedBlogs();
  await db.end(); // Close the connection pool after seeding
};

// Execute the seeding process
seedDatabase();
