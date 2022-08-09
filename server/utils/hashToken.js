const crypto = require('crypto');

const hashToken = (token) => crypto.createHash('sha512').update(token).digest('hex');

module.exports = hashToken;
