const request = require('supertest');
const server = require('../api/server');

// Users entry tests

describe('user router', () => {
    it('should register a user and give a status code back of 201', () => {
        let randomNum = Math.random() * 8000;
        return request(server)
            .post('/api/register')
            .send({
                "username": `tester${randomNum}`,
                "password": "LambdaTesting",
                "name": "Tester"
            })
            .then(res => {
                expect(res.status).toBe(201);
            });
    });
    it('Should get token back', () => {
        let randomNum = Math.random() * 8000;
        return request(server)
        .post('/api/register')
        .send({
            "username": `tester${randomNum}`,
            "password": "LambdaTesting",
            "name": "Tester"
        })
        .then(res => {
            expect(res.body.token).toBeDefined()
        })
    })
});

describe('User Router', () => {
    it('Successful login results in status 200', () => {
        let randomNum = Math.random() * 8000;
        return request(server)
        .post('/api/register')
        .send({
            "username": `tester${randomNum}`,
            "password": "LambdaTesting",
            "name": "Tester" 
        })
        .then(res => {
            return request(server)
            .post('/api/login')
            .send({
                "username": `tester${randomNum}`, 
                "password": "LambdaTesting"
            })
            .then(response => {
                expect(response.status).toBe(200)
            })
        })
    })
    it('Successful login returns a token', () => {
        let randomNum = Math.random() * 8000;
        return request(server)
        .post('/api/register')
        .send({
            "username": `tester${randomNum}`,
            "password": "LambdaTesting",
            "name": "Tester" 
        })
        .then(res => {
            return request(server)
            .post('/api/login')
            .send({
                "username": `tester${randomNum}`, 
                "password": "LambdaTesting"
            })
            .then(response => {
                expect(response.body.token).toBeDefined()
            })
    })
})
})

// End tests