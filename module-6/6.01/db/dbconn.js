import pg from 'pg';

import { POSTGRES_URL } from '../config.js';

console.log(`=== debug: POSTGRES_URL: ${POSTGRES_URL}`);
const db = new pg.Pool({
  connectionString: POSTGRES_URL,
});

// Test the connection
db.connect((err, client, release) => {
  console.log(`=== debug: starting PG connection...`);
  if (err) {
    console.error('Failed to connect to the database:', err);
  } else {
    console.log('Successfully connected to the database');
    release();
  }
});

export default db;
