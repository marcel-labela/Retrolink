const bcrypt = require('bcrypt');
const { db } = require('../../utils/db');
const hashToken = require('../../utils/hashToken');

module.exports = {
  async findUserByUsername(username) {
    return await db.user.findUnique({
      where: {
        username,
      }
    })
  },
  async checkHashToken(refreshToken) {
    return hashToken(refreshToken);
  },
  async validPassword(password, existingPassword) {
    return await bcrypt.compare(password, existingPassword);
  },
  async createUserByEmailAndPassword(user) {
    user.password = bcrypt.hashSync(user.password, 12);

    return await db.user.create({
      data: {
        email: user.email,
        password: user.password,
        username: user.username,
      },
    });
  },
  async findUserByEmail(email) {
    return await db.user.findUnique({
      where: {
        email,
      },
    });
  },
  async revokeTokens(userId) {
    return await db.refreshToken.updateMany({
      where: {
        userId
      },
      data: {
        revoked: true
      }
    });
  },
  async deleteRefreshToken(id) {
    return await db.refreshToken.update({
      where: {
        id,
      },
      data: {
        revoked: true
      }
    });
  },
  async findRefreshTokenById(id) {
    return await db.refreshToken.findUnique({
      where: {
        id,
      },
    });
  },
  async addRefreshTokenToWhitelist({ jti, refreshToken, userId }) {
    return await db.refreshToken.create({
      data: {
        id: jti,
        hashedToken: hashToken(refreshToken),
        userId
      },
    });
  }
}