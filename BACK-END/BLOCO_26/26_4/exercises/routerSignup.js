const express = require('express');
const router = express.Router();
const generateToken = require('./generateToken');

const rescue = require('express-rescue');

// Exercício Bônus - 3
router.post('/', rescue((req, res) => {
  const { email, password, firstName, phone } = req.body;
  if (email && password && firstName && phone) {
    const newToken = generateToken();
    return res.status(200).json({ "token": `${ newToken }`});
  }
  return res.status(401).json({ "message": "Informações incompletas" });
}));

module.exports = router;
