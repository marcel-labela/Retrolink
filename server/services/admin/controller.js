const helpers = require('./helpers');
const authHelpers = require('../auth/helpers');
const { v4: uuidv4 } = require('uuid');
const { generateTokens } = require('../../utils/jwt');

module.exports = {
  async createAdmin(req, res) {
    let adminAccess;

    try {
      const { email, password, username } = req.body;

      if (!email || !password || !username) {
        res.status(400)
        throw new Error('You must provide an email, username and a password')
      }

      const existingUserName = await authHelpers.findUserByUsername(username);

      if (existingUserName) {
        res.status(412)
        throw new Error('Username already exists')
      }

      const existingUser = await authHelpers.findUserByEmail(email);

      if (existingUser) {
        res.status(412)
        throw new Error('Emailaddress already in use, use another one')
      }

      const adminUser = await helpers.createAdminUserByEmailAndPassword({ email, password, username })

      const jti = uuidv4();
      adminAccess = true;
      const { accessToken, refreshToken } = generateTokens(user, jti, adminAccess);
      await authHelpers.addRefreshTokenToWhitelist({ jti, refreshToken, userId: adminUser.id });

      res.status(201).json({
        access: accessToken,
        refresh: refreshToken
      });

    } catch (error) {
      return res.status(400).send({
        status: 'failure',
        message: error
      });
    }
  },
  async loginAdmin(req, res) {
    let adminAccess;

    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.status(400);
        throw new Error('You must provide an email and a password')
      }

      const existingUser = await authHelpers.findUserByEmail(email);
      adminAccess = existingUser.isAdmin;

      if (!existingUser) {
        res.status(412)
        throw new Error('Emailaddress not found')
      }

      const validPassword = helpers.validPassword(password, existingUser.password);

      if (!validPassword) {
        res.status(412)
        throw new Error('Password is incorrect')
      }

      if (!adminAccess) {
        res.status(412)
        throw new Error('You dont have access to this resource');
      }

      const jti = uuidv4();
      const { accessToken, refreshToken } = generateTokens(existingUser, jti, adminAccess);
      await authHelpers.addRefreshTokenToWhitelist({ jti, refreshToken, userId: existingUser.id });

      res.json({
        access: accessToken,
        refresh: refreshToken,
      });
    }
    catch (error) {
      return res.status(400).send({
        status: 'failure',
        message: error
      });
    }
  }
}