const Books = require('../services/Books');

const getAll = async (req, res) => {
  const { author_id } = req.query;
  const books = await Books.getAll(author_id);

  if (!books) return res.status(400).send('Not found!');
  
  res.status(200).json(books);
}

const findById = async (req, res) => {
  const { id } = req.params;

  const book = await Books.findById(id);

  if (book.length === 0) return res.status(400).json({ message: 'Not found' });

  res.status(200).send(book);
}

const create = async (req, res) => {
  const { title, author_id } = req.body;

  const newBook = await Books.create(title, author_id);

  if (!newBook)
    return res.status(400).json({ message: 'Dados inválidos' });

  res.status(200).json(newBook);
}

module.exports = { getAll, findById, create }
