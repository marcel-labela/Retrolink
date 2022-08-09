const helpers = require('./helpers');

module.exports = {
  async createConversation(req, res) {
    try {
      const { message, senderUserId, receiverUserId } = req.body;

      if (!message || !senderUserId || !receiverUserId) {
        return res.status(400).json({
          message: 'Please provide all required fields'
        });
      }

      // CHECK IF CONVERSATION EXISTS
      const conversation = await helpers.getConversationBySenderAndReceiver(senderUserId, receiverUserId);

    } catch(error) {
      return res.status(400).json({
        message: 'Please provide all required fields'
      });
    }
  },
  async getAllConversations(req, res) {
    try {
      const { userId } = req.query;
      if (!userId) {
        res.status(403);
        throw new Error('no user id provided')
      }

      const conversations = await helpers.getConversations(userId);
      res.json(conversations);
    } catch(error) {

      return res.status(400).send({
        status: 'failure',
        error: error,
      });
    }
  },
  async getConversationById(req, res) {
    try {
      const { userId, conversationId } = req.query;
      if (!userId || !conversationId) {
        res.status(403);
        throw new Error('no user id or conversation id provided')
      }

      const conversation = await helpers.getConversationByUserId(userId, conversationId);
      res.json(conversation);
    } catch(error) {

      return res.status(400).send({
        status: 'failure',
        error: error,
      });
    }
  },
  async deleteConversation(req, res) {
    try {
      const { userId, conversationId } = req.query;
      if (!userId || !conversationId) {
        res.status(403);
        throw new Error('no user id or conversation id provided')
      }

      await helpers.deleteConversationById(userId, conversationId)
      .then(() => {
        res.json({
          status: 'success',
        });
      }).catch(error => {
        res.status(400);
        throw new Error(error);
      })

    } catch(error) {

      return res.status(400).send({
        status: 'failure',
        error: error,
      });
    }
  }
}