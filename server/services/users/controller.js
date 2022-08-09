const helpers = require('./helpers');
const mailHelpers = require('../../mailer/index.js');

module.exports = {
  async deleteOne(req, res) {
    try {
      const { userId } = req.params;

      if (!userId) {
        res.status(403);
        throw new Error('No user id provided');
      }

      const deleteUser = await helpers.deleteUserById(userId)
      // @TODO ZOEK UIT HOE JE PROPER RESPONSES TERUGSTUURT.
      res.json(deleteUser)
    } catch(error) {
      return res.status(400).send({
        status: 'failure',
        error: error,
      });
    }
  },
  async getOne(req, res) {
    try {
      const { userId } = req.body;

      if (!userId) {
        res.status(403);
        throw new Error('No user Id provided');
      }

      const user = await helpers.findUserById(userId);

      delete user.password;
      res.json(user)

    } catch(error) {
      return res.status(400).send({
        status: 'failure',
        error: error,
      });
    }
  },
  async getAll(req, res) {
    // @TODO: DIT MOET JE NOG FIXEN.
    try {
      return res.send({
        status: 'success',
        body: 'oke is goed'
      });
    } catch (error) {
      return res.status(400).send({
        status: 'failure',
        error,
      });
    }
  }
}