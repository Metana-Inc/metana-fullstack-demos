import request from 'supertest';
import app from '../index.js';
import User from '../models/User.js';
import { connectToDatabase, disconnectFromDatabase } from '../db/dbconn.js';
import bcrypt from 'bcrypt';
import { MONGO_URI_TEST } from '../config.js';

jest.setTimeout(30000);

const hashPassword = (password) => bcrypt.hashSync(password, 10);

// Function to seed a user
const seedUser = async () => {
  console.log('[TEST] Seeding a user for authentication tests...');
  const user = {
    name: 'Admin John Doe',
    email: 'john.doe@example.com',
    role: 'admin',
    password: hashPassword('password1'),
  };

  const existingUser = await User.findOne({ email: user.email });
  if (!existingUser) {
    await User.create(user);
  }
  console.log('[TEST] User seeded successfully for authentication tests');
};

// Function to delete the seeded user
const deleteUser = async () => {
  console.log('[TEST] Cleaning up the seeded user...');
  await User.deleteOne({ email: 'john.doe@example.com' });
  console.log('[TEST] Seeded user cleaned up');
};

beforeAll(async () => {
  console.log('[TEST SUITE] Connecting to the test database...');
  await connectToDatabase(MONGO_URI_TEST);
  console.log('[TEST SUITE] Connected to the test database');

  await seedUser(); // Seed the user before running tests
});

afterAll(async () => {
  await deleteUser(); // Clean up the user after tests
  console.log('[TEST SUITE] Disconnecting from the test database...');
  await disconnectFromDatabase();
  console.log('[TEST SUITE] Disconnected from the test database');
});

describe('Auth API', () => {
  it('should log in a user with valid credentials', async () => {
    const loginCredentials = {
      email: 'john.doe@example.com',
      password: 'password1',
    };

    console.log(
      '[TEST] Sending POST request to /api/login with valid credentials...'
    );
    const response = await request(app)
      .post('/api/login')
      .send(loginCredentials);

    console.log('[TEST] Response received from /api/login');
    console.log('[TEST] Response status:', response.status);
    console.log('[TEST] Response body:', response.body);
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe('login successful');
    expect(response.body.data.user.email).toBe(loginCredentials.email);
    expect(response.body.data.token).toBeDefined();
    console.log('[TEST] Login with valid credentials test passed');
  });

  it('should fail to log in a user with invalid credentials', async () => {
    const loginCredentials = {
      email: 'john.doe@example.com',
      password: 'wrongpassword',
    };

    console.log(
      '[TEST] Sending POST request to /api/login with invalid credentials...'
    );
    const response = await request(app)
      .post('/api/login')
      .send(loginCredentials);

    console.log('[TEST] Response received from /api/login');
    expect(response.status).toBe(401);
    expect(response.body.error).toBe('username or password invalid');
    console.log('[TEST] Login with invalid credentials test passed');
  });
});
