// Config settings for the app
import 'dotenv/config';

export const PORT = process.env.PORT || 3001;
export const MONGO_URI = process.env.MONGO_URI;
export const MONGO_DB_NAME = process.env.MONGO_DB_NAME;
export const FRONTEND_PORT = process.env.FRONTEND_PORT || 3000;
