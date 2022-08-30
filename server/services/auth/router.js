const express = require('express');
const router = express.Router();

const controller = require('./controller');
const v2Controller = require('./v2Controller');
const prefix = 'auth';
const { isAdmin } = require('../middlewares');

// REGISTER USER
router.post(`/${prefix}/register`, controller.register);

// LOGIN USER
router.post(`/${prefix}/login`, controller.login);

// REFRESHTOKEN
router.post(`/${prefix}/refreshToken`, controller.refreshTokenRoute);


// REGISTER V2
router.post(`/v2/${prefix}/register`, v2Controller.register);

// PASSWORD FORGET (@TODO: THIS ROUTE IS NOT DONE);
// router.post(`/${prefix}/passwordForget`, controller.passwordForget);

module.exports = router;