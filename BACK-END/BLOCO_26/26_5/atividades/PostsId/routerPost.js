const express = require('express');
const router = express.Router();
const posts = require('./posts');

router.get('/', (req, res) => {
  res.status(200).json({ posts });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const idNumber = parseInt(id);
  const postRequest = posts.filter(post => post.id === idNumber);
  if (postRequest.length > 0) res.status(200).json({ postRequest });
  res.status(404).json({ error: "id not found"});
});

module.exports = router;
