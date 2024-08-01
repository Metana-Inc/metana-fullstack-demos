import request from 'supertest';
import app from '../../index.js';
import Blog from '../../models/Blog.js';
import { MONGO_URI_TEST } from '../../config.js';
import { connectToDatabase, disconnectFromDatabase } from '../../db/dbconn.js';

jest.setTimeout(30000);

beforeAll(async () => {
  console.log('[TEST SUITE] Connecting to the test database...');
  await connectToDatabase(MONGO_URI_TEST);
  console.log('[TEST SUITE] Connected to the test database');
});

afterAll(async () => {
  console.log('[TEST SUITE] Disconnecting from the test database...');
  await disconnectFromDatabase();
  console.log('[TEST SUITE] Disconnected from the test database');
});

afterEach(async () => {
  console.log('[TEST SUITE] Cleaning up the blogs collection...');
  await Blog.deleteMany({});
  console.log('[TEST SUITE] Cleaned up the blogs collection');
});

describe('Blog API', () => {
  it('should create a new blog', async () => {
    const newBlog = {
      title: 'Test Blog Supertest',
      content: 'This is a test blog supertest',
    };

    console.log(
      '[TEST] Sending POST request to /api/blogs to create a new blog...'
    );
    const response = await request(app).post('/api/blogs').send(newBlog);

    console.log('[TEST] Received response from the server');
    console.log('[TEST] Response status:', response.status);
    console.log('[TEST] Response body:', response.body);
    expect(response.status).toBe(201);
    expect(response.body.title).toBe(newBlog.title);
    expect(response.body.content).toBe(newBlog.content);
    console.log('[TEST] Create blog test passed successfully');
  });

  it('should get all blogs', async () => {
    console.log('[TEST] Creating test blogs...');
    const blog1 = new Blog({ title: 'Blog 1', content: 'Content 1' });
    const blog2 = new Blog({ title: 'Blog 2', content: 'Content 2' });

    await blog1.save();
    await blog2.save();
    console.log('[TEST] Test blogs created successfully');

    console.log(
      '[TEST] Sending GET request to /api/blogs to retrieve all blogs...'
    );
    const response = await request(app).get('/api/blogs');

    console.log('[TEST] Received response from the server');
    console.log('[TEST] Response status:', response.status);
    console.log('[TEST] Response body:', response.body);
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThanOrEqual(1);
    console.log('[TEST] Retrieve all blogs test passed successfully');
  });

  it('should get a single blog by id', async () => {
    console.log('[TEST] Creating a test blog...');
    const blog = new Blog({ title: 'Blog 1', content: 'Content 1' });
    await blog.save();
    console.log('[TEST] Test blog created successfully');

    console.log(
      `[TEST] Sending GET request to /api/blogs/${blog._id} to retrieve the blog by ID...`
    );
    const response = await request(app).get(`/api/blogs/${blog._id}`);

    console.log('[TEST] Received response from the server');
    console.log('[TEST] Response status:', response.status);
    console.log('[TEST] Response body:', response.body);
    expect(response.status).toBe(200);
    expect(response.body.title).toBe(blog.title);
    expect(response.body.content).toBe(blog.content);
    console.log('[TEST] Retrieve single blog by ID test passed successfully');
  });

  it('should update a blog', async () => {
    console.log('[TEST] Creating a test blog...');
    const blog = new Blog({ title: 'Blog 1', content: 'Content 1' });
    await blog.save();
    console.log('[TEST] Test blog created successfully');

    const updatedBlog = {
      title: 'Updated Blog',
      content: 'Updated Content',
    };

    console.log(
      `[TEST] Sending PUT request to /api/blogs/${blog._id} to update the blog...`
    );
    const response = await request(app)
      .put(`/api/blogs/${blog._id}`)
      .send(updatedBlog);

    console.log('[TEST] Received response from the server');
    console.log('[TEST] Response status:', response.status);
    console.log('[TEST] Response body:', response.body);
    expect(response.status).toBe(200);
    expect(response.body.title).toBe(updatedBlog.title);
    expect(response.body.content).toBe(updatedBlog.content);
    console.log('[TEST] Update blog test passed successfully');
  });

  it('should delete a blog', async () => {
    console.log('[TEST] Creating a test blog...');
    const blog = new Blog({ title: 'Blog 1', content: 'Content 1' });
    await blog.save();
    console.log('[TEST] Test blog created successfully');

    console.log(
      `[TEST] Sending DELETE request to /api/blogs/${blog._id} to delete the blog...`
    );
    const response = await request(app).delete(`/api/blogs/${blog._id}`);

    console.log('[TEST] Received response from the server');
    console.log('[TEST] Response status:', response.status);
    console.log('[TEST] Response body:', response.body);
    expect(response.status).toBe(200);
    expect(response.body.title).toBe(blog.title);
    expect(response.body.content).toBe(blog.content);
    console.log('[TEST] Delete blog test passed successfully');
  });
});
