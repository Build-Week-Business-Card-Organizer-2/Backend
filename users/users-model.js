module.exports = {
    addUser, 
    findUserById,
    findBy,
    updateUser,
    removeUser
}

const db = require('../data/db-config.js');

function addUser(newUser) {
    console.log("in addUser");
    console.log("newUser to be added in addUser:", newUser);
    return db('users')
        .insert(newUser, 'id')
        .then(ids => {
            console.log('ids returned after insert: ', ids);
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

function updateUser(id, updatedUser) {
    return db('users')
        .where({id: id})
        .update(updatedUser)
        .then( () => {
            return findUserById(id);
        })
}

function removeUser(id) {
    return db('users').where({ id }).del();
}

