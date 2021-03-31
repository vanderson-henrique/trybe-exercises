const Books = require('../models/Books');

const getAll = async (id) => {
  const books = await Books.getAll(id);
  return books;
}

const findById = async (author_id) => {
  const book = await Books.findById(author_id);

  if (book.length === 0) return false;
  return book;
}

const create = async (title, author_id) => {
  const [{insertId}] = await Books.create(title, author_id);

  return ({
    id: insertId,
    title,
    author_id
  });
}

module.exports = { getAll, findById, create }
