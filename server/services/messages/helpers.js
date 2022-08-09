const { db } = require('../../utils/db');

module.exports = {
  async deleteConversationById(userId, conversationId) {
    return await db.collection('conversations').delete({
      where: {
        userId,
        conversationId,
      },
    });
  },
  async getConversations(userId) {
    return await db.collection('conversations').find({
      where: {
        userId
      }
    });
  },
  async getConversationBySenderAndReceiver(userId, conversationId) {
    return await db.collection('conversations').find({
      where: {
        us
      }
    })
  },
  async getConversationByUserId(userId, conversationId) {
    return await db.collection('conversations').findUnique({
      where: {
        userId,
        id: conversationId
      }
    });
  }
}