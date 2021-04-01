const statisticsModel = require('../models/statistics');

const statisticsProcessing = async (data) => {
  const existsCity = await statisticsModel.verifyCity(data);
  const existsUF = await statisticsModel.verifyUF(data);

  if (existsUF) await statisticsModel.updateStatisticsByUF(data);
  if (existsCity) await statisticsModel.updateStatisticsByCity(data);

  if(!existsCity) await statisticsModel.insertStatisticsByCity(data);
  if (!existsUF) await statisticsModel.insertStatisticsByUF(data);
}

const findUF = async (uf) => {
  const statisticsUF = await statisticsModel.verifyUF({ uf });
  return statisticsUF;
}

const findCity = async (cidade) => {
  const statisticsCity = await statisticsModel.verifyCity({ cidade });
  return statisticsCity;
}

module.exports = { findCity, findUF, statisticsProcessing };
