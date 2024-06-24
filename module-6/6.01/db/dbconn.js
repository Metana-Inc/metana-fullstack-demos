import pg from 'pg';
import { POSTGRES_URL, POSTGRES_SSL } from '../config.js';

const db = new pg.Pool({
  connectionString: POSTGRES_URL,
  ssl: POSTGRES_SSL ? { rejectUnauthorized: false } : false,
});

// Test the connection
db.connect((err, client, release) => {
  if (err) {
    console.error('Failed to connect to the database:', err);
  } else {
    console.log('Successfully connected to the database');
    release();
  }
});

export default db;
