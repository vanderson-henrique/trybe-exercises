module.exports = (req, res, next) => {
  req.requestData = Date.now();
  next();
};
