const connection = require('./connection');

const findByCEP = async (cep) => {
  return connection()
    .then((db) => db.collection('cache_cep').findOne({ cep: cep }, { _id: 0 }))
    .then((data) => data);
}

const savesCEP = async ({ cep , uf , cidade , bairro, logradouro }) => {
  return connection()
    .then((db) => db.collection('cache_cep').insertOne({ cep, uf, cidade, bairro, logradouro }));
}

module.exports = { findByCEP, savesCEP };
