const express = require('express');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const Users = require('./users-model.js');
const restricted = require('../auth/auth-middleware.js');
const jwt = require('jsonwebtoken');
const CardsRouter = require('../cards/cards-router.js');

const router = express.Router();

router.get('/', restricted, (req, res) => {
    //temporary response for now
    //res.status(200).send('Welcome to Users Router');
    Users.getUsers()
        .then(users => {
            const usersList = users.map(user => {
                return (
                    {
                    //return everything except password
                    "id": user.id,
                    "username": user.username,
                    "name": user.name,
                    "job_description": user.job_description    
                    }
                )
            });
            res.status(200).json(usersList);
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                message: 'Failed to retrieve users'
                })
        });
});

// nested router for cards endpoints
router.use('/cards', restricted, CardsRouter);


// User entry endpoints

router.post('/register', (req, res) => {
    let user = req.body;
    //console.log("user body to add to db: ", user)
    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;
    //console.log('hash: ',  hash);
    Users.addUser(user)
        .then(saved => {
           // console.log("saved :", saved);
           const user_to_return = {
               //return everything except password
               "id": saved.id,
                "username": saved.username,
                "name": saved.name,
                "job_description": saved.job_description
           }
            const token = generateToken(user);
            res.status(201).json({user: user_to_return, token: token})
        })
        .catch(err => {
            // console.log("error after POST", err);
            res.status(500).json({error: err, message: 'Failure to add user'})
        });
  });

  router.post('/login', (req, res) => {
      let { username, password } = req.body;

      Users.findBy({ username })
      .first()
      .then(user => {
          if (user && bcrypt.compareSync(password, user.password)) {
              const token = generateToken(user);
              const user_to_return = {
                //return everything except password
                "id": user.id,
                 "username": user.username,
                 "name": user.name,
                 "job_description": user.job_description
            }
              res.status(200).json({
                  message: `Welcome ${user.name}`,
                  status: 'Logged in',
                  token: token,
                  user: user_to_return
              });
          }
          else {
              res.status(401).json({
                  Error: 'Invalid credentials!'
              })
          }
      })
      .catch(error => {
          res.status(500).json(error)
      });
  });

  function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    }
    const secret = process.env.JWT_SECRET || 'so much to learn to set up a database';
    const options = {
        expiresIn: '8h'
    }
    return jwt.sign(payload, secret, options);
  }
  

/*
PUT api/:id
Updates a user profile
*/

router.put('/:id', (req, res) => {
    const id = req.params.id;
    Users.updateUser(id, req.body)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(500).json({error: err, message: `Failure to update user with id ${id}`})
        });
});

/*
DELETE api/:id
Removes a user
 */

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Users.removeUser(id)
    .then(deleted => {
        if (deleted) {
            res.json({ message: `Successfully deleted user with id ${id}` });
        }
        else {
            res.status(404).json({ message: 'Could not find the user with the given ID'})
        }
    })
    .catch(err => {
        res.status(500).json({ error: err, message: 'Failed to delete the user' })    
    });
});

module.exports = router;