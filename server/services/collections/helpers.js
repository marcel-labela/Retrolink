const { db } = require('../../utils/db');

module.exports = {
  async getCollection(collectionId) {
    return await db.collection('collections').findUnique({
      where: {
        id: collectionId
      },
    });
  },
  async findCollectionById(id) {
    return await db.collection.findUnique({
      where: {
        userId: id
      }
    })
  },
  async addGameToCollection(userId, collectionId, gameId) {
    //TODO DUBBELCHECK OF DIT WEL LEKKER WERKT.
    return await db.collection.update({
      where: {
        userId,
        id: collectionId
      },
      data: {
        games: {
          connect: {
            id: gameId
          }
        }
      }
    })
  },
  }
