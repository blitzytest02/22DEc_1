# Hello Express Server

A simple Node.js Express tutorial server with two GET endpoints demonstrating basic REST API implementation.

## Description

This project provides a minimal Express.js server implementation with two GET endpoints:
- **GET /** - Returns "Hello world"
- **GET /evening** - Returns "Good evening"

## Prerequisites

- Node.js 18.0.0 or higher (tested with v20.19.6)
- npm 9.0.0 or higher

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

## Usage

### Start the Server

Run the server with:
```bash
npm start
```

The server will start on port 3000 by default. You can customize the port using the `PORT` environment variable:
```bash
PORT=8080 npm start
```

### Server Output
```
Server is running on port 3000
```

## API Documentation

### Endpoints

| Endpoint | Method | Description | Response |
|----------|--------|-------------|----------|
| `/` | GET | Root endpoint | `Hello world` |
| `/evening` | GET | Evening greeting endpoint | `Good evening` |

### Example Requests

**Root Endpoint:**
```bash
curl http://localhost:3000/
# Response: Hello world
```

**Evening Endpoint:**
```bash
curl http://localhost:3000/evening
# Response: Good evening
```

## Testing

Run the test suite with:
```bash
npm test
```

Expected output:
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

## Project Structure

```
.
├── index.js          # Express server with endpoint definitions
├── index.test.js     # Jest test suite for endpoints
├── package.json      # Project configuration and dependencies
├── package-lock.json # Dependency lock file
└── README.md         # Project documentation
```

## Technology Stack

| Component | Version | Purpose |
|-----------|---------|---------|
| Node.js | v20.19.6 | JavaScript runtime |
| Express.js | ^4.21.2 | Web framework for Node.js |
| Jest | ^30.0.0 | JavaScript testing framework |
| Supertest | ^7.0.0 | HTTP assertion library |

## License

ISC
