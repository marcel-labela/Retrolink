const helpers = require('./helpers');

module.exports = {
  async createOne(req, res) {
    try {
      // @TODO: MAKE SOME INPUT VALIDATION RIGHT HERE
      const { userId } = req.body;
      const { price, title } = req.body.content;

      if (!userId || !price || !title) {
        res.status(400)
        throw new Error('You must provide all input for this endpoint')
      }

      const advert = await helpers.createAdvert(req.body.content, userId)

      res.json(advert)
    } catch(error) {

      return res.status(400).send({
        status: 'failure',
        error: error,
      })
    }
  },
  async getOneByUser(req, res) {
    try {
      const { userId} = req.params;

      if (!userId) {
        res.status(403);
        throw new Error('No user id provided');
      }

      const advert = await helpers.findAdvertByUser(userId);

      res.json(advert)
    } catch(error) {

      return res.status(400).send({
        status: 'failure',
        error: error,
      })
    }
  },
  async getOne(req, res) {
    try {
      const { advertId } = req.query;
      const advert = await helpers.findAdvertById(advertId)

      res.json(advert)
    } catch(error) {

      return res.status(400).send({
        status: 'failure',
        error: error,
      });
    }
  },
  async getAll(req, res) {
    try {
      const adverts = await helpers.readAllAdverts();

      res.json(adverts)
    } catch(error) {

      return res.status(400).send({
        status: 'failure',
        error: error,
      });
    }
  }
}