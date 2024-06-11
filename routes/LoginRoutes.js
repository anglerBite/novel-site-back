const express = require('express');
const loginRouter = express.Router();
const {
    getAllLoginData,
    registerData,
    login
} = require('./loginalgorithm')

loginRouter.get('/', getAllLoginData)
loginRouter.post('/register', registerData)
loginRouter.post('/', login)

module.exports = loginRouter