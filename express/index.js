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
// this will launch the server and then everything that this retrieves from the server, will be directed to app.js