const { body, validationResult } = require('express-validator');
// @TODO: Clean up the way you set up validations.
const userRegisterValidation = [
  body('email')
    .isEmail()
    .trim()
    .normalizeEmail({ all_lowercase: true}),
  body('username')
    .not()
    .isEmpty()
    .isLength({ min: 6, max: 15})
    .trim()
    .escape(),
  body('password')
    .isStrongPassword({
      minLength: 8,
      minUpperCase: 1,
      minSymbols: 1,
    })
    .trim()
];

// Er moet nog een functie die controleert of een mailadres al bestaat.

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

const validationSchemas = {
  'AUTH.REGISTER': userRegisterValidation
}

module.exports = { validator };
