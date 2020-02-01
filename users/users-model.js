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

function findUserById(user_id) {
  return db('users')
        .where({id: user_id})
        .first();
}

function findBy(filter) {
    return db('users').where(filter);
}