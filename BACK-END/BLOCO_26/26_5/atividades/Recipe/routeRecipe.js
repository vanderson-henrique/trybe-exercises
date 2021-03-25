const express = require('express');
const router = express.Router();
const recipes = require('./recipes');

router.delete('/', (req, res) => {
  const { deletedRecipes } = req;
  res.status(200).json({ receitaDeleteda: deletedRecipes })
});

router.get('/', (req, res) => {
  res.status(200).json({ recipes })
});

module.exports = router;
