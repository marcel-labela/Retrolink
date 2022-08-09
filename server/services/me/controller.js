const jwt = require('jsonwebtoken');
const helpers = require('../users/helpers');
const authHelpers = require('../auth/helpers');

//@TODO: Refactor token authorization to use middleware
module.exports = {
  async getUserData(req, res) {
    const { authorization } = req.headers;

    if(!authorization) {
      res.status(401);
      throw new Error('🚫 Un-Authorized 🚫');
    }

    try {
      const token = authorization.split(' ')[1];
      const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      console.log('payload', payload);
      if (!payload) {
        res.status(401);
        throw new Error('🚫 Un-Authorized 🚫');
      }

      const userId = payload.userId;
      const user = await helpers.findUserById(userId);
      res.json(user);
    }catch(err) {
      return res.status(400).send({
        status: 'failure',
        error: err,
      });
    }
  },
  async deleteUserData(req, res) {
    console.log('delete user data');
    const { authorization } = req.headers;

    if(!authorization) {
      res.status(401);
      throw new Error('🚫 Un-Authorized 🚫');
    }

    try {
      const token = authorization.split(' ')[1];
      const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);

      if (!payload) {
        res.status(401);
        throw new Error('🚫 Un-Authorized 🚫');
      }

      helpers.deleteUserById(payload.userId);
      authHelpers.revokeTokens(payload.userId);

      res.json({
        status: 'success',
      })

      console.log('payload', payload);
      //@TODO: Do I need to and delete all of the tokens of this user?
    }catch(err) {
      return res.status(400).send({
        status: 'failure',
        error: err,
      });
    }
  }
}