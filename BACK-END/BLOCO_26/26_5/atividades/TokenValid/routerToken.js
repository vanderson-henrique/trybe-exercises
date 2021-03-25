const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { results } = req; 
  res.status(200).json({ results });
});

module.exports = router;
