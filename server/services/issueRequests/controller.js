const helpers = require('./helpers');

module.exports = {
  async getAllIssues(req, res) {
    try {
      const issues = await helpers.getAll();

      if (!issues) {
        return res.status(403).send({
          status: 'failure',
          error: 'no issues found'
        })
      }

      res.json(issues)
    } catch(error) {
      return res.status(400).send({
        status: 'failure',
        error: error,
      });
    }
  },
  async getOneIssue(req, res) {
    try {
      const { issueId } = req.params;

      if (!issueId) {
        res.status(403).send({
          status: 'failure',
          error: 'no issue id provided'
        })
      }

      const issue = await helpers.getOne(issueId);
      res.json(issue)
    } catch(error) {
      return res.status(400).send({
        status: 'failure',
        error: error,
      })
    }
  },
  async createOneIssue(req, res) {
    try {
      const { data } = req.body;

      if (!data.message || !data.userId) {
        res.status(403).send({
          status: 'failure',
          error: 'no message or userId provided'
        })
      }

      //@TODO: SEND BACK PROPER RESPONSE FOR A CREATE ENDPOINT
      const createdIssue = await helpers.createOne(data);
      res.json(createdIssue);

    } catch(error) {
      return res.status(400).send({
        status: 'failure',
        error: error,
      });
    }
  },
  async updateOneIssue(req, res) {
    try {
      const { issueId } = req.params;
      const { issue } = req.body;

      if (!issueId || !issue) {
        res.status(403).send({
          status: 'failure',
          error: 'no issue id or issue provided'
        });
      }

    const updatedIssue = await helpers.updateOne(issueId, issue);
    res.json(updatedIssue);
  } catch(error) {
    return res.status(400).send({
      status: 'failure',
      error: error,
      });
    }
  }
}