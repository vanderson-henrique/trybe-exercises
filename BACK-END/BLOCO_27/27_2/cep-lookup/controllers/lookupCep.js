const { Router } = require('express');
const findCEP = require('../services/lookupCep');
const validaCEP = require('../middlewares/validaCEP');

const router = new Router();

router.get('/', validaCEP, async (req, res) => {
  const { cep } = req.query;
  const result = await findCEP(cep);

  if(!result) return res.status(404).json({ message: "CEP não encontrado" });

  res.status(200).json(result);
});

module.exports = router;
