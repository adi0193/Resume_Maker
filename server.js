const express = require('express');
const app = express();
const dbConnect = require('./dbConnect');
const path = require('path');

app.use(express.json());

const port = 5000;
const userRoute = require('./routes/userRoute');

// Serve static files from the React app
app.use(express.static(path.resolve(__dirname, 'client', 'build')));

// API routes
app.use('/api/user/', userRoute);

// Serve the React app's index.html file for any unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

console.log(path.resolve(__dirname, 'client', 'build', 'index.html'));

// Start the server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
