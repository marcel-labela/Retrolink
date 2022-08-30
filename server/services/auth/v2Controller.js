const { getAuth } = require('../../utils/firebaseAdmin');

module.exports = {
  async register(req, res) {
    const { email: userEmail, password, username } = req.body;
    let user;
    // Validate what is send to the req.body
    // how to divide everything between the controllers and the helpers.

    try {
      if (!userEmail || !password || !username) {
        res.status(400)
        throw new Error('You must provide an email, username and a password')
      }

      // Wat hier nog te doen:
      // - validation van wat er naar de BE wordt opgestuurd
      // - add function for generating email verification link.
      // - add error handling
      // - add validation if user email is already present or not.
      // - rewrite the authentication context for the app to conform to this way of auth actions

      user = await getAuth()
      .createUser({
        email: userEmail,
        emailVerified: false,
        password: password,
        displayName: username,
        disabled: false
      })
      // add the createdUser to your own postgres database.
      // the UID needs to be the User Id.
    } catch (error) {
      return res.status(400).send({
        status: 'failure',
        message: error,
      })
    }

    // Return hier wat nuttigs.
    return user;
  },
  async login(req, res) {
    //@TODO: create function for logging in for user.
  },
  async passwordForget(req, res) {
    //@TODO: create stuff for password forget flow.
  }
}