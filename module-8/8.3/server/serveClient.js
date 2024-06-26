// Serve the prebuilt frontend React client
import express from 'express';
import path from 'path';
import fs from 'fs';
const app = express();
import { FRONTEND_PORT } from './config.js';

const buildPath = path.resolve(path.join('..', 'dist'));
if (!fs.existsSync(buildPath)) {
  console.error(
    'build directory "/dist" does not exist: run npm build:client before starting server'
  );
}
// TODO: ensure this path exists

app.use(express.static(buildPath));

app.get('/', function (req, res) {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(FRONTEND_PORT, () =>
  console.log(`frontend client started on http://localhost:${FRONTEND_PORT}`)
);
