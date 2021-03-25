const axios = require('axios');

function verifyToken(token) {
  const tokenRegex = /^(\d|\w){12}$/gm;
  return tokenRegex.test(token);
}

module.exports = validaToken = async (req, res, next) => {
  const { authorization } = req.headers;
  if ( verifyToken(authorization) ) {
    const urlAPI = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';
    const results = await axios.get(urlAPI).then(({ data }) => data);
    req.results = results;
    next();
  }
  res.status(401).json({ error: "invalid token" });
};
