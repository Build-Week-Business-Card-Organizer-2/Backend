module.exports = {
    addUser, 
    findUserById
}

const db = require('../data/db-conf.js');

function addUser(newUser) {
    db('users')
        .insert(newUser)
        .then(ids => {
            return findUserById(ids[0]);
        });
}

function findUserById(user_id) {
    db('users')
        .where({id: user_id})
        .first();
}