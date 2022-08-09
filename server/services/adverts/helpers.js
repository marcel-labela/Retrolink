const { db } = require('../../utils/db');

module.exports = {
  async createAdvert(body, userId) {
    return await db.advert.create({
      data: {
        ...body,
        User: {
          connect: userId
        }
      }
    })
  },
  async findAdvertByUser(advertId, userId) {
    return await db.advert.findUnique({
      where: {
        userId: userId,
      }
    })
  },
  async readAllAdverts() {
    return await db.advert.findMany();
  },
  async findAdvertById(id) {
    return await db.advert.findUnique({
      where: {
        id,
      }
    })
  }
}