const express = require('express');
const router = express.Router();
const controller = require('./controller');

const { isAdmin } = require('../middlewares');
const prefix = 'admin';

// create admin user
// Desc: Create admin user
// Req: Authenticated and isAdmin = true;
router.post(`/${prefix}`, isAdmin, controller.createAdmin);

// login admin user
// Desc: login route for admin user
// Req: isAdmin
router.post(`/${prefix}/login`, controller.loginAdmin);

module.exports = router;