const Books = require('../models/Books');

const isValid = async (title, author_id) => {
  if (!title) return false;
  if (title.length < 4) return false;
  if (!author_id) return false;

  const idsAuthors = await Books.listIdsAuthors();
  
  if (!idsAuthors.find(author => author.id === author_id)) return false;
  
  return true;
}

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
  const validBook = await isValid(title, author_id);

  if (!validBook) return false;

  const [{insertId}] = await Books.create(title, author_id);

  return ({
    id: insertId,
    title,
    author_id
  });
}

module.exports = { getAll, findById, create }
