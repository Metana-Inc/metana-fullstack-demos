import pg from 'pg';
import { POSTGRES_URL } from '../config.js';

const db = new pg.Pool({
  connectionString: POSTGRES_URL,
  ssl: POSTGRES_URL.includes('localhost') ? false : { rejectUnauthorized: false },
});

// Test the connection
db.connect((err, client, release) => {
  console.log('=== debug: starting PG connection...');
  if (err) {
    console.error('Failed to connect to the database:', err);
  } else {
    console.log('Successfully connected to the database');
    release();
  }
});

export default db;
