import pg from 'pg';
import 'dotenv/config';

const db = new pg.Pool({
  connectionString:
    'postgresql://postgres:Minion22740@localhost:5432/metana-demo?schema=public',
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
