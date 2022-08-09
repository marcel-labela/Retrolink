const express = require('express');
const router = express.Router();
const controller = require('./controller');

const { isAuthenticated } = require('../middlewares');
const prefix = 'adverts';

// ** ADVERT LISTVIEW ** //
// READ ALL ADVERTS
// Desc: Fetch all of the adverts in a list view
// Req: Authenticated
router.get(`/${prefix}`, isAuthenticated, controller.getAll);

// READ ONE ADVERT
// Desc: Fetch one advert for a detail view
// Req: Authenticated
router.get(`/${prefix}/:advertId`, isAuthenticated, controller.getOne);

// @TODO:
// READ ALL ADVERTS WITH FILTERING
// Desc: Read all adverts based on certain filtering.
// Req: Authenticated
// https://jonathanmh.com/building-a-simple-searchable-api-with-express-backend/

// ** USER SPECIFIC ** //
// READ ALL USER ADVERTS
// Desc: Fetch all adverts, specific to a userId
// Req: Authenticated
router.get(`/${prefix}/:userId`, isAuthenticated, controller.getOneByUser);

// CREATE ONE ADVERT
// Desc: Create an advert
// Req: Authenticated and userId
router.post(`/${prefix}`, isAuthenticated, controller.createOne);

module.exports = router;
