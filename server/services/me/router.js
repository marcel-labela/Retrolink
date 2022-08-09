const express = require('express');
const router = express.Router();

const controller = require('./controller');
const prefix = 'me';

// @TODO: Add authentication middleware

// Read user data
// Desc: Read user data based on jwt
// Req: Authenticated
router.get(`/${prefix}`, controller.getUserData);

//Delete user account
// Desc: Delete user account based on jwt
// Req: Authenticated
router.post(`/${prefix}`, controller.deleteUserData);

module.exports = router;