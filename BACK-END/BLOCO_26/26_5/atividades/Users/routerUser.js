const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { comment } = req;
  res.status(200).json({ comment })
});

module.exports = router;