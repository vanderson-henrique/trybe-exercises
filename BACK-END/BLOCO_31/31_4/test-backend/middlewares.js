const isTokenValid = (token = '') => {
  const regex = /^([a-zA-Z0-9 _-]+)$/;
  return token.length === 16 && regex.test(token);
};

const log = (req, res, next) => {
  console.log(req.body, new Date())
  next()
}

const checkAuthToken = (req, res, next) => {
  if (isTokenValid(req.headers.authorization)) {
    next();
  } else {
    res.status(401).json({ message: 'Token inválido!' });
  }
};

module.exports = {
  checkAuthToken,
  log
}