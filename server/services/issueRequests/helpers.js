const { db } = require('../../utils/db');

module.exports = {
  async updateOne(id, issue) {
    return await db.IssueRequest.update(issue, {
      where: {
        id,
      }
    })
  },
  async createOne(issue) {
    return await db.IssueRequest.create({
      data: {
        ...issue,
      }
    });
  },
  async getAll() {
    return await db.IssueRequest.findMany();
  },
  async findIssueById(id) {
    return await db.IssueRequest.findUnique({
      where: {
        id,
      }
    })
  }
}