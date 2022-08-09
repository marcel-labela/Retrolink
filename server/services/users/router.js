const express = require('express');
const router = express.Router();

const { isAuthenticated } = require('../middlewares');
const controller = require('./controller');
const prefix = 'users';

// READ ALL USERS
// Desc: Read all users
// Req: Authenticated

//@TODO: check the return value of all users. Only admin are able to see more information about users than normal users.
router.get(`/${prefix}`,isAuthenticated, controller.getAll);

// READ ONE USER
// Desc: Read one user for user detail view
// Req: Authenticated
router.get(`/${prefix}/profile`, isAuthenticated, controller.getOne);

// DELETE ONE USER
// Desc: Delete one user
// Req: Authenticated and is Admin
router.delete(`/${prefix}/:userId`, isAuthenticated, controller.deleteOne);


module.exports = router;