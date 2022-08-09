const express = require('express');
const router = express.Router();

const controller = require('./controller');
const prefix = 'auth';
const { isAdmin } = require('../middlewares');

// REGISTER USER
router.post(`/${prefix}/register`, controller.register);

// LOGIN USER
router.post(`/${prefix}/login`, controller.login);

// REFRESHTOKEN
router.post(`/${prefix}/refreshToken`, controller.refreshTokenRoute);

// PASSWORD FORGET (@TODO: THIS ROUTE IS NOT DONE);
// router.post(`/${prefix}/passwordForget`, controller.passwordForget);

module.exports = router;