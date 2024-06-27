const express = require('express');
const app = express();
const path = require('path');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});