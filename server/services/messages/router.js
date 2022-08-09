const express = require('express');
const router = express.Router();

const { isAuthenticated } = require('../middlewares');
const controller = require('./controller');
const prefix = 'messages';

// @TODO: STILL NEED TO COMPLETE THIS FEATURE

// GET ALL CHAT CONVERSATIONs
// Desc: get all chat conversations for a user
// Req: Authenticated
router.get(`/${prefix}/conversations/:userId`, isAuthenticated, controller.getAllConversations);

// GET CHAT CONVERSATION BY ID
// Desc: get chat conversation by id
// Req: Authenticated
router.get(`/${prefix}/conversations/:userId/:conversationId`, isAuthenticated, controller.getConversationById);

// DELETE ONE CHAT CONVERSATION
// Desc: delete one chat conversation for a user
// Req: Authenticated
router.delete(`/${prefix}/conversations/:userId/:conversationId`, isAuthenticated, controller.deleteConversation);

// SEND MESSAGE TO OTHER USERS WHEN CONVERSATION ALREADY EXISTS
// Desc: send text message to other user. Userid as param is the user that is receving the message.
// Req: Authenticated
// body: message, senderUserId, receiverUserId, conversationId
// router.post(`/${prefix}/send`, isAuthenticated, controller.sendMessage);

// CREATE NEW CONVERSATION WHEN SENDING A USER THE FIRST MESSAGE
// desc: create new conversation when sending a user the first message
// req: Authenticated
// body: message, senderUserId, receiverUserId
router.post(`/${prefix}/create`, isAuthenticated, controller.createConversation);

module.exports = router;
