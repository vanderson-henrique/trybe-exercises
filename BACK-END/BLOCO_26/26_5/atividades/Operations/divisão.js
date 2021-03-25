module.exports = divisão = (req, res, next) => {
  const { numero1, numero2, operacao } = req.params;
  const num1 = parseInt(numero1);
  const num2 = parseInt(numero2);
  if (num2 === 0) res.status(400).json({ error: "Não é possível fazer divisão por zero!"});
  if (operacao === "divisão") {
    const resultado = (num1 / num2).toFixed(2);
    res.status(200).json({ resultado })
  }
  next();
};