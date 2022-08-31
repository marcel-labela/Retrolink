const express = require('express');
const router = express.Router();

const v2Controller = require('./v2Controller');
const prefix = 'auth';

const { validator } = require('./validators');


// REGISTER USER
// router.post(`/${prefix}/register`,
//   validate([userRegisterValidation]),
//   controller.register
// );

// LOGIN USER
// router.post(`/${prefix}/login`, controller.login);

// REFRESHTOKEN
// router.post(`/${prefix}/refreshToken`, controller.refreshTokenRoute);


// REGISTER V2
// router.post(`/v2/${prefix}/register`, validate(userRegisterValidation), v2Controller.register);

router.post(`/v2/${prefix}/register`, validator('AUTH.REGISTER'), v2Controller.register)

// PASSWORD FORGET (@TODO: THIS ROUTE IS NOT DONE);
// router.post(`/${prefix}/passwordForget`, controller.passwordForget);

module.exports = router;