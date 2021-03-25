const express = require('express');
const router = express.Router();

router.put('/', (req, res) => {
  res.send('Página de alteração de receitas')
});

module.exports = router;
