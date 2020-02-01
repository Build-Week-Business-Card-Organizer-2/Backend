const express = require('express');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const Users = require('./users-model.js');
const restricted = require('../auth/auth-middleware.js');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/', (req, res) => {
    //temporary response for now
    res.status(200).send('Welcome to Users Router');
})


router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;
    Users.addUser(user)
        .then(saved => {
            const token = generateToken(user);
            res.status(201).json({user: saved, token: token})
        })
        .catch(err => {
            res.status(500).json({error: err, message: 'Failure to add user'})
        });
  });

  router.post('/login', (req, res) => {
      let { username, password } = req.body;

      Users.findBy({ username })
      .first()
      .then(user => {
          if (user && bcrypt.compareSync(password, user.password)) {
              const token = generateToken(user)
              res.status(200).json({
                  Message: 'Hello, I am your token!',
                  token
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
  
module.exports = router;