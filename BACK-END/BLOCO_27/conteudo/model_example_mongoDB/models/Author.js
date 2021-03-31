const connection = require('./connection');

const { ObjectId } = require('mongodb');

// Busca todos os autores do banco.

const getAll = async () => {
  return connection() // O connection retorna uma Promise, e sendo OK virá com o banco escolhido
    .then((db) => db.collection('authors').find().toArray()) // já com o banco, usamos a collection 'authors'
    .then((authors) => // Aqui faz o tratamento do retorno para a forma que queremos usar
      authors.map(({ _id, firstName, middleName, lastName }) =>
        ({
          id: _id,
          firstName,
          middleName,
          lastName,
        })
      )
  );
};

const findById = async (id) => {
  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(ObjectId(id)));

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

  return ({
    id,
    firstName,
    middleName,
    lastName,
  });
};

const create = async (firstName, middleName, lastName) =>
  connection()
    .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }))
    .then(result => getNewAuthor({ id: result.insertedId, firstName, middleName, lastName }));

module.exports = {
  getAll,
  findById,
  create
};