const request = require('supertest');
const server = require('../api/server');


// User information for testing

const randomNum = Math.random() * 8000;

const testRegister = {
    "username": `tester${randomNum}`,
    "password": "LambdaTesting",
    "name": "Tester"
};

const testLogin = {
    "username": `tester${randomNum}`,
    "password": "LambdaTesting"
};

// Test to GET for /api/cards

describe('Get /api/cards', () => {
    it('Should return status code 200', () => {
        request(server)
        .post('/api/register')
        .send(testRegister)
        .then(res => {
            return request(server)
            .post('/api/login')
            .send(testLogin)
            .then(res => {
                return request(server)
                .get('/api/cards')
                .then(response => {
                    expect(response.status).toBe(200)
                });
            });
        });
    });
    it('Should return an array of all cards in the database', () => {
        request(server)
        .post('/api/register')
        .send(testRegister)
        .then(res => {
            return request(server)
            .post('/api/login')
            .send(testLogin)
            .then(res => {
                return request(server)
                .get('/api/cards')
                .then(response => {
                    expect(response.body).toMatchObject([])
                })
            })
        })
    })
});


