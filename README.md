# Hello Express Server

A simple Node.js Express server tutorial demonstrating how to create REST API endpoints. This project implements two GET endpoints that return greeting messages.

## Features

- **GET /** - Returns "Hello world"
- **GET /evening** - Returns "Good evening"
- Comprehensive test suite using Jest and Supertest
- Clean, well-documented codebase

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** version 18 or higher
- **npm** (comes bundled with Node.js)

To verify your Node.js version:

```bash
node --version
# Should output v18.x.x or higher
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd hello-express-server
```

2. Install dependencies:

```bash
npm install
```

This will install:
- Express.js (web framework)
- Jest (testing framework)
- Supertest (HTTP testing library)

## Usage

### Starting the Server

To start the Express server:

```bash
npm start
```

The server will start on port 3000 by default. You should see:

```
Server is running on port 3000
```

### Custom Port Configuration

You can configure the port using the `PORT` environment variable:

```bash
PORT=8080 npm start
```

### Testing the Endpoints

Once the server is running, you can test the endpoints using curl:

```bash
# Test the root endpoint
curl http://localhost:3000/
# Response: Hello world

# Test the evening endpoint
curl http://localhost:3000/evening
# Response: Good evening
```

Or open your browser and navigate to:
- [http://localhost:3000/](http://localhost:3000/) - Returns "Hello world"
- [http://localhost:3000/evening](http://localhost:3000/evening) - Returns "Good evening"

## API Documentation

### GET /

Returns a "Hello world" greeting message.

**Request:**
```http
GET / HTTP/1.1
Host: localhost:3000
```

**Response:**
- **Status Code:** 200 OK
- **Content-Type:** text/html; charset=utf-8
- **Body:** `Hello world`

**Example:**
```bash
curl http://localhost:3000/
# Output: Hello world
```

### GET /evening

Returns a "Good evening" greeting message.

**Request:**
```http
GET /evening HTTP/1.1
Host: localhost:3000
```

**Response:**
- **Status Code:** 200 OK
- **Content-Type:** text/html; charset=utf-8
- **Body:** `Good evening`

**Example:**
```bash
curl http://localhost:3000/evening
# Output: Good evening
```

## Testing

This project includes a comprehensive test suite using Jest and Supertest.

### Running Tests

To run all tests:

```bash
npm test
```

### Expected Test Output

```
PASS ./index.test.js
  Express Server Endpoints
    GET /
      ✓ should return "Hello world"
      ✓ should have correct content-type
    GET /evening
      ✓ should return "Good evening"
      ✓ should have correct content-type
    GET /nonexistent
      ✓ should return 404 for non-existent routes
    POST / (method not allowed)
      ✓ should return 404 for POST on root

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
```

### Test Coverage

The test suite covers:
- Successful responses for both endpoints
- Correct content-type headers
- 404 responses for non-existent routes
- HTTP method validation

## Project Structure

```
hello-express-server/
├── index.js           # Express server with endpoint definitions
├── index.test.js      # Jest test suite for endpoints
├── package.json       # Project configuration and dependencies
├── package-lock.json  # Dependency lock file (auto-generated)
├── node_modules/      # Installed dependencies (auto-generated)
└── README.md          # Project documentation (this file)
```

### File Descriptions

| File | Description |
|------|-------------|
| `index.js` | Main server file containing Express app initialization and route definitions |
| `index.test.js` | Test suite with comprehensive endpoint tests using Jest and Supertest |
| `package.json` | Project metadata, scripts, and dependency declarations |
| `README.md` | Project documentation with installation, usage, and API reference |

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | 18+ | JavaScript runtime environment |
| Express.js | ^4.21.2 | Web application framework |
| Jest | ^30.0.0 | Testing framework |
| Supertest | ^7.0.0 | HTTP assertion library |

## Scripts

The following npm scripts are available:

| Script | Command | Description |
|--------|---------|-------------|
| `start` | `npm start` | Starts the Express server |
| `test` | `npm test` | Runs the Jest test suite |

## License

This project is provided for educational purposes as part of a Node.js Express tutorial.
