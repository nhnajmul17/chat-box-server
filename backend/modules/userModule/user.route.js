// const { registerUser } = require("./user.controller")
const express = require('express')
const { registerUser, loginUser } = require('./user.controller')

const Userrouter = express.Router()

Userrouter.route('/')
    .post(registerUser)
    .get((req, res) => { res.send("user route running") })

Userrouter.route('/login').post(loginUser)


module.exports = Userrouter 
