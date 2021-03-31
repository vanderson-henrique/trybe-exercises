const Author = require('../services/Author');

const getAll = async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
}

const findById = async (req, res) => {
  const { id } = req.params;
  
  const author = await Author.findById(id);
  
  if (!author) return res.status(404).json({ message: 'Not found' });
  
  res.status(200).json(author);
}

const create = async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  
  const newAuthor = await Author.create(first_name, middle_name, last_name);

  if (!newAuthor) return res.status(400).json({ message: 'Dados inválidos' });
  
  res.status(201).json(newAuthor);
}

module.exports = { getAll, findById, create };
