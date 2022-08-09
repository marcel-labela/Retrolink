const express = require('express');
const router = express.Router();

// Registered entity routes
// router.use(require('./adverts/router'));
router.use(require('./auth/router'));
// router.use(require('./collections/router'));
// router.use(require('./issueRequests/router'));
// router.use(require('./messages/router'));
router.use(require('./users/router'));
router.use(require('./me/router'));
router.use(require('./admin/router'));

module.exports = router;