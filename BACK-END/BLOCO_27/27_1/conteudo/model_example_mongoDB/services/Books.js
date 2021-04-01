const Books = require('../models/Books');

const isValid = async (title, author_id) => {
  if (!title) return false;
  if (title.length < 4) return false;
  if (!author_id) return false; 

  return true;
}

const getAll = async (author_id) => {
  const books = await Books.getAll(author_id);
  return books;
}

const findById = async (id) => {
  const book = await Books.findById(id);
  return book;
}

const create = async (title, author_id) => {
  const bookValid = await isValid(title, author_id);

  if (!bookValid) return false;

  const { insertedId } = await Books.create(title, author_id);

  return ({
    id: insertedId,
    title,
    author_id
  });
}

module.exports = { getAll, findById, create }
