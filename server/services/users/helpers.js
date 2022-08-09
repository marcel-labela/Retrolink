const { db } = require('../../utils/db');
const { revokeTokens } = require('../auth/helpers');

module.exports = {
  async findUserById(id) {
    return await db.user.findUnique({
      where: {
        id,
      }
    })
  },
  async deleteUserById(id) {
    return await db.user.delete({
      where: {
        id,
      }
    })
  }
}
