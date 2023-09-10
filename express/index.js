const app = require('./app');
const http = require('http');

// Get the port from environment variables or use a default port
const port = process.env.PORT || 3000;

// Create a HTTP server using the Express app
const server = http.createServer(app);

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
