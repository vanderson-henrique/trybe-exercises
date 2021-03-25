const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`Página Inicial - Data: ${ req.requestData }`);
});

router.get('/sobre', (req, res) => {
  res.send(`Sobre - Data: ${ req.requestData }`);
});

router.use((req, res) => {
  res.status(404).json({ "message": "Página não encontrada" });
});

module.exports = router;