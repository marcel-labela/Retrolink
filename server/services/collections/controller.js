const helpers = require('./helpers');

module.exports = {
  async getAll(req, res) {
    try {
      const { userId } = req.query;
      if (!userId) {
        res.status(403);
        throw new Error('no user id provided')
      }

      const collection = await helpers.findCollectionById(userId);
      res.json(collection);
    } catch(error) {

      return res.status(400).send({
        status: 'failure',
        error: error,
      });
    }
  },
  async getOne(req, res) {
    try {
      const { collectionId } = req.query;

      const collection = await helpers.getCollection(collectionId);
      res.json(collection);
    }

    catch (error) {
      return res.status(400).send({
        status: 'failure',
        error: error,
      });
    }
  },
  async addOne(req, res) {
    try {
      const { userId, collectionId, gameData } = req.query;

      if (!userId || !collectionId || !gameData) {
        res.status(403);
        throw new Error('no userId or collectionId provided')
      }

      const result = helpers.addGameToCollection(userId, collectionId, gameData);
      res.json(result)
    } catch(error) {

      return res.status(400).send({
        status: 'failure',
        error: error,
      });
    }
  },
  async deleteOne(req, res) {
    console.log('delete one')
  },
  async getCollectionById(req, res) {
    const { collectionId } = req.params;

    if (!collectionId) {
      res.status(403);
      throw new Error('no collectionId provided')
    }

    try {
      const collection = await helpers.getCollection(collectionid);
      res.json(collection);

    } catch(error) {
        return res.status(400).send({
          status: 'failure',
          error: error,
        });
    }
  }
}