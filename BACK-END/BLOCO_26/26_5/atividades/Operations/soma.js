module.exports = soma = (req, res, next) => {
  const { numero1, numero2, operacao } = req.params;
  if (operacao === "soma") {
    const num1 = parseInt(numero1);
    const num2 = parseInt(numero2);
    const resultado = num1 + num2;
    res.status(200).json({ resultado })
  }
  next();
};
