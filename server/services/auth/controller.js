const helpers = require('./helpers');
const { v4: uuidv4 } = require('uuid');
const { generateTokens } = require('../../utils/jwt');

module.exports = {
  async register(req, res) {
    let adminAccess = false;

    try {
      const { email, password, username } = req.body;

      if (!email || !password || !username) {
        res.status(400)
        throw new Error('You must provide an email, username and a password')
      }

      const existingUserName = await helpers.findUserByUsername(username);

      if (existingUserName) {
        res.status(412)
        throw new Error('Username already exists')
      }

      const existingUser = await helpers.findUserByEmail(email);

      if (existingUser) {
        res.status(412)
        throw new Error('Emailaddress already in use, use another one')
      }

      const user = await helpers.createUserByEmailAndPassword({ email, password, username })

      const jti = uuidv4();
      const { accessToken, refreshToken } = generateTokens(user, jti, adminAccess);
      await helpers.addRefreshTokenToWhitelist({ jti, refreshToken, userId: user.id });

      //@TODO: WAT IS DE BESTE MANIER VAN HET VERSTUREN VAN EEN SUCCESS MESSAGE
      //@TODO: STUUR OOK USERID MEE, OFZO? WANT JE BENT HIER AL INGELOGGED.
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
  async login(req, res) {
    let adminAccess;

    try {
      const { email, password } = req.body;

      //@TODO: REPLACE THIS KIND OF STUFF WITH PROPER VALIDATION.
      if (!email || !password) {
        res.status(400);
        throw new Error('You must provide an email and a password.');
      }

      const existingUser = await helpers.findUserByEmail(email);

      if (!existingUser) {
        res.status(403);
        throw new Error('Invalid login credentials.');
      }

      const validPassword = helpers.validPassword(password, existingUser.password);

      if (!validPassword) {
        res.status(403);
        throw new Error('Invalid login credentials.');
      }

      // if it is admin, make the admin boolean true.
      // add it to the signing of the token.
      const jti = uuidv4();
      adminAccess = existingUser.isAdmin;
      const { accessToken, refreshToken } = generateTokens(existingUser, jti, adminAccess);
      await helpers.addRefreshTokenToWhitelist({ jti, refreshToken, userId: existingUser.id });

      res.json({
        access: accessToken,
        refresh: refreshToken,
      });

    } catch(error) {
      return res.status(400).send({
        status: 'failure',
        message: error
      });
    }
  },
  async refreshTokenRoute(req, res) {
    try {
      const { refreshToken } = req.body;

      if (!refreshToken) {
        res.status(400);
        throw new Error('Missing refresh token.');
      };

      const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
      const savedRefreshToken = await helpers.findRefreshTokenById(payload.jti);

      if (!savedRefreshToken || savedRefreshToken.revoked === true) {
        res.status(401)
        throw new Error('Unauthorized')
      };

      const hashedToken = helpers.checkHashToken(refreshToken);

      if (hashedToken !== savedRefreshToken.hashedToken) {
        res.status(401);
        throw new Error('Unauthorized');
      }

      const user = await helpers.findUserById(payload.userId);

      if (!user) {
        res.status(401);
        throw new Error('Unauthorized');
      }

      await helpers.deleteRefreshToken(savedRefreshToken.id);
      const jti = uuidv4();
      const { accessToken, refreshToken: newRefreshToken } = generateTokens(user, jti);
      await helpers.addRefreshTokenToWhitelist({ jti, refreshToken: newRefreshToken, userId: user.id });

      res.json({
        access: accessToken,
        refresh: newRefreshToken
      });
    } catch (error) {

      return res.status(400).send({
        status: 'failure',
        message: error
      });

    }
  },
  async passwordForget(req, res) {
    try {
      const { userId } = req.body;

      await helpers.revokeTokens(userId);
      res.json({ message: `Tokens revoked for user with id #${userId}` });
    } catch (error) {
      console.log('error', error);

      return res.status(400).send({
        status: 'failure',
        message: error
      });
    }
  }
}