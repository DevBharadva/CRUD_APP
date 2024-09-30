const express =  require('express');
const { createUser } = require('../controller/user.controller');
const userRotues = express.Router();

userRotues.post('/create',createUser);

module.exports = userRotues;