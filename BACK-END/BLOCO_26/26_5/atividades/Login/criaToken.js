const crypto = require('crypto');

module.exports = criaToken = (req, res, next) => {
  req.token = crypto.randomBytes(6).toString('hex');
  next();
};
