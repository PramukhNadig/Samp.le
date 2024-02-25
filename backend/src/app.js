// Import necessary modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Import routes
const routes = require('./routes');

// Setup middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Use routes
app.use('/', routes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
