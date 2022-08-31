const { validationResult } = require('express-validator');

const validator = (validationKey) => {
  return async (req, res, next) => {
    await Promise.all(validationSchemas[validationKey].map((schema) => schema.run(req)))

    const result = validationResult(req);
    if (result.isEmpty()) {
      return next();
    }

    const errors = result.array();
    return res.send(errors)
  };
}

module.exports = { validator };