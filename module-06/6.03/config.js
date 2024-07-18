// Config settings for the app
import 'dotenv/config';

export const PORT = process.env.PORT || 3001;
export const MONGO_URI = process.env.MONGO_URI;
export const MONGO_DB_NAME = process.env.MONGO_DB_NAME;

export const POSTGRES_URL = process.env.POSTGRES_URL;
export const POSTGRES_USER = process.env.PGUSER;
export const POSTGRES_PASSWORD = process.env.PGPASSWORD;
export const POSTGRES_HOST = process.env.PGHOST;
export const POSTGRES_PORT = process.env.PGPORT;
export const POSTGRES_DB = process.env.PGDATABASE;
export const POSTGRES_SSL = process.env.PGSSLMODE === 'true';