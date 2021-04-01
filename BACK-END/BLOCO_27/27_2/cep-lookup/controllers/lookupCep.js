const findCEP = require('../services/lookupCep');

const lookupCep = async (req, res) => {
  const { cep } = req.query;
  const result = await findCEP(cep);

  if(!result) return res.status(404).json({ message: "CEP não encontrado" });

  res.status(200).json(result);
}

module.exports = lookupCep;
