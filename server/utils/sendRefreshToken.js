const sendRefreshToken = (res, token) => {
  res.cookie('refresh_token', token, {
    httpOnly: true,
    sameSite: true,
    path: '/auth/sendRefreshToken',
  });
}

module.exports = { sendRefreshToken };