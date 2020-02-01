const express = require('express');
const bcrypt = require('bcryptjs');
require('dotenv').config();
//const Users = require('./users-model.js');
//const restricted = require('../auth/restricted-middleware.js');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/', (req, res) => {
    //temporary response for now
    res.status(200).send('Welcome to Users Router');
})
module.exports = router;