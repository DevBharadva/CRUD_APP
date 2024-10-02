const express =  require('express');
const { createUser, getUser, getAllUser } = require('../controller/user.controller');
const userRotues = express.Router();

userRotues.post('/create',createUser);
userRotues.get('/getuser',getUser);
userRotues.get('/getAll',getAllUser);

module.exports = userRotues;
