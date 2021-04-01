const fetch = require('node-fetch');
const lookupCepModel = require('../models/lookupCep');
const { statisticsProcessing } = require('./statistics');

const headers = { Accept: 'application/json' };

const findCEPbyAPI = async (cep) => {
  const response = await fetch(`http://cep.la/${cep}`, { headers });
  const CEPData = await response.json();
  return CEPData;
}

const formataCEP = (cep) => {
  return cep.split('-').join('');
}

const findCEP = async (data) => {
  let cep = data;
  if (cep.length === 9) {
    cep = formataCEP(cep);
  }

  const CEPbyMongo = await lookupCepModel.findByCEP(cep);
  
  if(CEPbyMongo) {
    statisticsProcessing(CEPbyMongo);
    return CEPbyMongo;
  }

  const newCEP = await findCEPbyAPI(cep);
  if (newCEP.length === 0) return null;

  await lookupCepModel.savesCEP(newCEP);

  statisticsProcessing(newCEP);

  return newCEP;
}

module.exports = findCEP;

