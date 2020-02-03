const request = require('supertest');
const server = require('./server');

describe('Server', () => {
    it('Running the test', () => {
        expect(true).toBe(true)
    });
    it('API running', () => {
        return request(server)
            .get('/')
            .then(res => {
                expect(res.body).toEqual({message: "API up and running on port 5000"})
            })
    })
});

