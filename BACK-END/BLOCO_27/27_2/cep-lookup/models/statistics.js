const connection = require('./connection');

const verifyCity = async ({ cidade }) => {
  return connection()
    .then((db) => db.collection('statistics').findOne({ cidade: cidade }))
    .then((data) => data);
}

const verifyUF = async ({ uf }) => {
  return connection()
    .then((db) => db.collection('statistics').findOne({ uf: uf }))
    .then((data) => data);
}

const insertStatisticsByCity = async ({ cidade }) => {
  return connection()
    .then((db) => db.collection('statistics').insertOne(
      { cidade: cidade, quantidade: 1 }
    ))
}

const insertStatisticsByUF = async ({ uf }) => {
  return connection()
    .then((db) => db.collection('statistics').insertOne(
      { uf: uf, quantidade: 1 }
    ))
}

const updateStatisticsByCity = async ({ cidade }) => {
  return connection()
    .then((db) => db.collection('statistics').updateOne(
      { cidade: cidade },
      { $inc: { quantidade: 1 } }
    ))
}

const updateStatisticsByUF = async ({ uf }) => {
  return connection()
    .then((db) => db.collection('statistics').updateOne(
      { uf: uf },
      { $inc: { quantidade: 1 } }
    ))
}

module.exports = { 
  insertStatisticsByCity, 
  insertStatisticsByUF, 
  verifyCity, 
  verifyUF,
  updateStatisticsByCity,
  updateStatisticsByUF
}

