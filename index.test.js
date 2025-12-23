/**
 * Jest Test Suite for Express.js Server Endpoints
 * 
 * Comprehensive tests for the Express server defined in index.js
 * Tests cover:
 * - GET / endpoint returning 'Hello world'
 * - GET /evening endpoint returning 'Good evening'
 * - 404 responses for non-existent routes
 * - 404 responses for invalid HTTP methods
 * - Content-type header validation
 */

const request = require('supertest');
const { app, server } = require('./index');

/**
 * Main test suite for Express Server Endpoints
 */
describe('Express Server Endpoints', () => {

    /**
     * Cleanup: Close the server after all tests complete
     * This prevents the server from keeping the test process alive
     */
    afterAll((done) => {
        server.close(done);
    });

    /**
     * Test suite for GET / endpoint
     */
    describe('GET /', () => {
        it('should return "Hello world"', async () => {
            const response = await request(app).get('/');
            expect(response.status).toBe(200);
            expect(response.text).toBe('Hello world');
        });

        it('should have correct content-type', async () => {
            const response = await request(app).get('/');
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toMatch(/text\/html/);
        });
    });

    /**
     * Test suite for GET /evening endpoint
     */
    describe('GET /evening', () => {
        it('should return "Good evening"', async () => {
            const response = await request(app).get('/evening');
            expect(response.status).toBe(200);
            expect(response.text).toBe('Good evening');
        });

        it('should have correct content-type', async () => {
            const response = await request(app).get('/evening');
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toMatch(/text\/html/);
        });
    });

    /**
     * Test for non-existent routes
     */
    describe('GET /nonexistent', () => {
        it('should return 404 for non-existent routes', async () => {
            const response = await request(app).get('/nonexistent');
            expect(response.status).toBe(404);
        });
    });

    /**
     * Test for invalid HTTP methods
     */
    describe('POST / (method not allowed)', () => {
        it('should return 404 for POST on root', async () => {
            const response = await request(app).post('/');
            expect(response.status).toBe(404);
        });
    });
});
