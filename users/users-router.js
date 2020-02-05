const express = require('express');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const Users = require('./users-model.js');
const restricted = require('../auth/auth-middleware.js');
const jwt = require('jsonwebtoken');
const CardsRouter = require('../cards/cards-router.js');
const Cards = require('../cards/cards-model.js');

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
                    "job_description": user.job_description,
                    "email": user.email,
                    "phone_number": user.phone_number,
                    "profile_img_src": user.profile_img_src  
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
router.use('/cards', CardsRouter);


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
                "job_description": saved.job_description,
                "email": user.email,
                "phone_number": user.phone_number,
                "profile_img_src": user.profile_img_src 
                

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
                 "job_description": user.job_description,
                 "email": user.email,
                "phone_number": user.phone_number,
                "profile_img_src": user.profile_img_src 
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

router.put('/:id', restricted, (req, res) => {
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

router.delete('/:id', restricted, (req, res) => {
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

/*
GET api/users/:id
Gets a user specified by id
 */

router.get('/:id', restricted, (req, res) => {
    const id = req.params.id;
    Users.findUserById(id)
        .then(user => {
            if (user) {
                const user_to_return = {
                    //return everything except password
                    "id": user.id,
                    "username": user.username,
                    "name": user.name,
                    "job_description": user.job_description,
                    "email": user.email,
                    "phone_number": user.phone_number,
                    "profile_img_src": user.profile_img_src 
                }
                Cards.getUserCards(id)
                    .then(cards => {
                        if (cards) {
                            res.status(200).json({message: "Successfully found user", user: user_to_return, collection: cards});
                        } else {
                            res.status(404).json({message:`User with id of ${id}'s card collection was not found in database.`});
                        }
                    })
                    .catch(err => {
                        res.status(500).json({message:`Error while attempting to retrieve user with id of ${id}'s card collection`, 
                            error: err})
                    });
            } else {
                res.status(404).json({message: `User with id of ${id} was not found in database.`})
            }
        })
        .catch(err => {
            res.status(500).json({message:`Error while attempting to retrive user with id of ${id}.`, error: err})
        });
        
});

module.exports = router;