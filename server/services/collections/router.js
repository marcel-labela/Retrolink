const express = require('express');
const router = express.Router();
const controller = require('./controller');

const { isAuthenticated } = require('../middlewares');
const prefix = 'collection';

// READ ALL GAMES IN COLLECTION
// Desc: return a list of all games in a collection
// Req: Authenticated
// @TODO MAKE THIS INTO FILTERING ETC.
// https://jonathanmh.com/building-a-simple-searchable-api-with-express-backend/
router.get(`/${prefix}/:userId/`, isAuthenticated, controller.getAll);

// READ ALL GAMES IN COLLECTION OF OTHER USERS.
// Desc: return a list of all games in a collection
// Req: Authenticated
router.get(`/${prefix}/:userId/:collectionId`, isAuthenticated, controller.getCollectionById);

// CREATE GAME IN COLLECTION
// Desc: adds a game to the collection
// Req: Authenticated and users can only add games to their own collection
router.post(`/${prefix}/:userId/:collectionId`, isAuthenticated, controller.addOne);

// DELETE GAME IN COLLECTION
router.delete(`/${prefix}/:userId/:collectionId/:gameId`, isAuthenticated, controller.deleteOne);

module.exports = router;