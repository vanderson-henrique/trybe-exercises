const { Router } = require('express');
const statisticServices = require('../services/statistics');

const router = new Router();

router.get('/', async (req, res) => {
  const { uf, cidade } = req.query;

  if (uf) {
    const dataUF = await statisticServices.findUF(uf);
    if (!dataUF) return res.status(400).json({ message: 'Estado não consta nas estatísticas' });
    return res.status(200).json(dataUF);
  }

  if (cidade) {
    const dataCity = await statisticServices.findCity(cidade);
    if (!dataCity) return res.status(404).json({ message: 'Cidade não consta nas estatísticas' });
    return res.status(200).json(dataCity)
  }
})

module.exports = router;
