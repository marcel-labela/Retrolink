const { getAuth } = require('../../utils/firebaseAdmin');
const helpers = require('./helpers');

module.exports = {
  async register(req, res) {
    const { email: userEmail, password, username } = req.body;
    // Validate what is send to the req.body
    // how to divide everything between the controllers and the helpers.

      // Wat hier nog te doen:
      // - add function for generating email verification link.
      // - add error handling
      // - write middleware that can be used for checking if user is authenticated
      // - add validation if user email is already present or not.
      // - rewrite the authentication context for the app to conform to this way of auth actions

    try {
      const user = await getAuth().createUser({
        email: userEmail,
        emailVerified: false,
        password: password,
        displayName: username,
        disabled: false
      });

      if (user) {
        try {
          const { uid, email, displayName } = user;
          const storedUser = await helpers.createUserByEmailandUid(uid, email, displayName);

          return res.status(200).send({
            status: 'success',
            message: storedUser
          })
        } catch(err) {
          return res.status(400).send({
            status: 'failure',
            message: error,
          })
        }
      }
    } catch (error) {
      return res.status(400).send({
        status: 'failure',
        message: error,
      })
    }

    // Return hier wat nuttigs.
    // return user;
  },
  async login(req, res) {
    //@TODO: create function for logging in for user.
  },
  async passwordForget(req, res) {
    //@TODO: create stuff for password forget flow.
  }
}