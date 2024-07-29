// Config settings for the app
import 'dotenv/config';

export const PORT = process.env.PORT || 3001;
export const MONGO_URI = process.env.MONGO_URI;
export const MONGO_URI_TEST = process.env.MONGO_URI_TEST;

export const JWT_SECRET = process.env.JWT_SECRET;
