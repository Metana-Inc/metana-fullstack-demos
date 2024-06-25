import db from '../db/dbconn.js';

const users = [
  {
    name: 'Admin John Doe',
    email: 'admin@gmaxil.com',
    role: 'admin',
  },
  {
    name: 'Normal Jane Doe 1',
    email: 'normal1@gmaxil.com',
    role: 'normal',
  },
  {
    name: 'Normal Jane Doe 2',
    email: 'normal2@gmaxil.com',
    role: 'normal',
  },
  {
    name: 'Normal Jane Doe 3',
    email: 'normal3@gmaxil.com',
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
  {
    title: 'Blog 3',
    content: 'Content of Blog 3',
  },
  {
    title: 'Blog 4',
    content: 'Content of Blog 4',
  },
];

async function seedUsers() {
  const userInsertQueries = users.map((user) =>
    db.query(
      `INSERT INTO users (name, email, role, created_at, updated_at) VALUES ($1, $2, $3, NOW(), NOW()) RETURNING id`,
      [user.name, user.email, user.role]
    ).then(result => ({ success: true, result }))
     .catch(error => ({ success: false, error, user }))
  );

  const userResults = await Promise.all(userInsertQueries);
  userResults.forEach(({ success, result, error, user }) => {
    if (success) {
      console.log('Inserted User:', result.rows[0]);
    } else {
      console.error('Error Inserting User:', user, error.message);
    }
  });

  const insertedUsers = await db.query('SELECT * FROM users');
  console.log('All Users in Database:', insertedUsers.rows); // Log all users in the database

  return userResults.filter(({ success }) => success).map(({ result }) => result.rows[0].id);
}

async function seedBlogs(userIds) {
  console.log('User IDs for blog seeding:', userIds); // Log the user IDs
  if (userIds.length === 0) {
    console.error('No user IDs found. Aborting blog seeding.');
    return;
  }

  // Assuming normal users are the last three in the users array
  const normalUserIds = userIds.slice(1);

  const blogInsertQueries = blogs.map((blog, index) =>
    db.query(
      `INSERT INTO blogs (title, content, user_id, created_at, updated_at) VALUES ($1, $2, $3, NOW(), NOW())`,
      [blog.title, blog.content, normalUserIds[index % normalUserIds.length]]
    ).then(result => ({ success: true, result }))
     .catch(error => ({ success: false, error, blog }))
  );

  const blogResults = await Promise.all(blogInsertQueries);
  blogResults.forEach(({ success, result, error, blog }) => {
    if (success) {
      console.log('Inserted Blog:', result.rows[0]);
    } else {
      console.error('Error Inserting Blog:', blog, error.message);
    }
  });

  const insertedBlogs = await db.query('SELECT * FROM blogs');
  console.log('All Blogs in Database:', insertedBlogs.rows); // Log all blogs in the database
}

async function seedDatabase() {
  try {
    await db.query('BEGIN');
    const userIds = await seedUsers();
    console.log('User IDs:', userIds); // Log user IDs to check if they are valid
    if (userIds.length > 0) {
      await seedBlogs(userIds);
    } else {
      console.error('No valid user IDs found. Skipping blog seeding.');
    }
    await db.query('COMMIT');
    console.log('Database seeded successfully.');
  } catch (error) {
    await db.query('ROLLBACK');
    console.error('Error seeding database:', error);
  } finally {
    db.end();
  }
}

seedDatabase();
