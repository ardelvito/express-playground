const express = require('express');
// const jwt = require('jsonwebtoken')

const UserController = require('../controller/usersController.js');


const route = express.Router();

//GET ALL USER
route.get('/', UserController.getAllUsers);

//USER REGISTER
route.post('/register', UserController.createNewUser);

//USER LOGIN
route.post('/login', UserController.loginUser);

//USER UPDATE
route.patch('/:id', UserController.updateUser);

//USER DELETE
route.delete('/:id', UserController.deleteUser);

module.exports = route;

