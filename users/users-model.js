module.exports = {
    addUser, 
    findUserById,
    findBy
}

const db = require('../data/db-config.js');

function addUser(newUser) {
    return db('users')
        .insert(newUser)
        .then(ids => {
            return findUserById(ids[0]);
        });
}

function findUserById(id) {
    return db('users')
        .where({id: id})
        .first();
}

function findBy(filter) {
    return db('users').where(filter);
}