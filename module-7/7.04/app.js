import express from 'express';
const app = express();
import path from 'path';
import 'tailwindcss/tailwind.css';

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Handle 404
app.use((req, res) => {
  res.status(404).send('404: Page not found');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
