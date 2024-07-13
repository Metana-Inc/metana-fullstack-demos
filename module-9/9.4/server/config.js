// Config settings for the app
import 'dotenv/config';

export const PORT = process.env.PORT || 3001;
export const MONGO_URI = process.env.MONGO_URI;

export const SERVER_ENCRYPT_KEY = process.env.SERVER_ENCRYPT_KEY;
