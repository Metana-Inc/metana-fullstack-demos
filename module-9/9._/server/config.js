// Config settings for the app
import 'dotenv/config';

export const PORT = process.env.PORT || 3001;
export const MONGO_URI = process.env.MONGO_URI;
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
export const SESSION_SECRET = process.env.SESSION_SECRET;

// export const MONGO_DB_NAME = process.env.MONGO_DB_NAME;
