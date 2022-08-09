const jwt = require('jsonwebtoken');

const generateAccessToken = (user, admin) => {
  return jwt.sign({ userId: user.id, isAdmin: admin }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: '10m',
  });
}

const generateRefreshToken = (user, jti, admin) => {
  return jwt.sign({
    userId: user.id,
    jti,
    isAdmin: admin,
  }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: '48h',
  });
}

const generateTokens = (user, jti, adminAccess) => {
  const admin = adminAccess ? true : false;

  const accessToken = generateAccessToken(user, admin);
  const refreshToken = generateRefreshToken(user, jti, admin);

  return {
    accessToken,
    refreshToken,
  };
}

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  generateTokens
};