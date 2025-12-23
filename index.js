/**
 * Express.js Server Implementation
 * 
 * A simple Node.js Express server with two GET endpoints:
 * - GET /        : Returns 'Hello world'
 * - GET /evening : Returns 'Good evening'
 * 
 * The server listens on a configurable PORT (defaults to 3000).
 * Both the app and server instances are exported for testing purposes.
 */

// Import Express.js web framework
const express = require('express');

// Create Express application instance
const app = express();

// Configure server port from environment variable or use default 3000
const PORT = process.env.PORT || 3000;

/**
 * Root endpoint handler
 * GET / - Returns 'Hello world' response
 * 
 * @route GET /
 * @returns {string} 'Hello world'
 */
app.get('/', (req, res) => {
    res.send('Hello world');
});

/**
 * Evening greeting endpoint handler
 * GET /evening - Returns 'Good evening' response
 * 
 * @route GET /evening
 * @returns {string} 'Good evening'
 */
app.get('/evening', (req, res) => {
    res.send('Good evening');
});

/**
 * Start the Express server and listen on the configured port
 * The server instance is stored for graceful shutdown and testing
 */
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

/**
 * Export app and server instances for testing
 * - app: Express application instance for route testing with Supertest
 * - server: HTTP server instance for lifecycle management (close on test completion)
 */
module.exports = { app, server };
