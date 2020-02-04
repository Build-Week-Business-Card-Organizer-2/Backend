const request = require('supertest');
const server = require('../api/server');


// User information for testing
let randomNum = Math.random() * 8000;

const testRegister = {
    "username": `tester${randomNum}`,
    "password": "LambdaTesting",
    "name": "Tester"
};

const testLogin = {
    "username": `tester${randomNum}`,
    "password": "LambdaTesting"
};

// Sample card to send to DB 

const testCard = {
    "person_name": `testPerson${randomNum}`,
    "business_name": "testBusiness",
    "url_string": "https://as1.ftcdn.net/jpg/02/04/66/02/500_F_204660283_onveez8hTPfZlIDb9v67AUQA7kwGVX79.jpg",
    "card_owner": 1,
    "category": "testCategory"
}

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
            .then(response => {
                const currentToken = response.body.token;
                return request(server)
                .get('/api/cards')
                .set('Authorization', currentToken)
                .then(response => {
                    expect(response.status).toBe(200)
                })
            })
        })
    });
    it('Should return a response body', () => {
            return request(server)
            .post('/api/login')
            .send(testLogin)
            .then(response => {
                const currentToken = response.body.token;
                return request(server)
                .get('/api/cards')
                .set('Authorization', currentToken)
                .then(response => {
                    expect(response.body).toBeTruthy();
                })
            })
        })
    });

    describe('POST api/cards', () => {
        it('should return status code of 201', () => {
            return request(server)
                .post('/api/login')
                .send(testLogin)
                .then(response => {
                    const currentToken = response.body.token;
                    return request(server)
                        .post('/api/cards')
                        .set('Authorization', currentToken)
                        .send(testCard) 
                        .then(res => {
                            expect(res.status).toBe(201);
                        });  
                });
        })
        it('should return a body with person_name property', () => {
            return request(server)
                .post('/api/login')
                .send(testLogin)
                .then(response => {
                    const currentToken = response.body.token;
                    return request(server)
                        .post('/api/cards')
                        .set('Authorization', currentToken)
                        .send(testCard) 
                        .then(res => {
                            expect(res.body).toHaveProperty('card_owner');
                        });  
                });
        });
    });
