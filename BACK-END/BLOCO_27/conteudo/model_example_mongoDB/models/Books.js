const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async (author_id) => {

  if (author_id) {
    return connection()
    .then((db) => db.collection('books').find({ _id: ObjectId(author_id) }).toArray())
    .then((books) => books)
  }

  return connection()
    .then((db) => db.collection('books').find().toArray())
    .then((books) => books)
};

const findById = async (id) => {
  return connection()
    .then((db) => db.collection('books').find(ObjectId(id)).toArray())
    .then((books) => books)
}

const create = async (title, author_id) => {
  return connection()
    .then((db) => db.collection('books').insertOne({ title, author_id }));
}

module.exports = { getAll, findById, create };
