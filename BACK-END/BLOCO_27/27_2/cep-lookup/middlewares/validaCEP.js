const validaComHifen = (cep) => {
  const re = /^\d{5}-\d{3}$/;
  return re.test(cep);
}

const validaSemHifen = (cep) => {
  const re = /^\d{8}$/;
  return re.test(cep);
}

const validaCEP = (req, res, next) => {
  const { cep } = req.query;

  if (!validaComHifen(cep) && !validaSemHifen(cep))
    return res.status(422).json({ message: "CEP inválido" });

  next();
}

module.exports = validaCEP;