const { Book } = require('../models');
const { Op } = require("sequelize");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll({
      // Definindo ordenação por author e data de criação
      order: [
        ['author', 'asc'],
        ['createdAt', 'asc']
      ]
    });
    res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });
    res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getBookByAuthor = async (req, res) => {
  try {
    const { author } = req.query;
    const books = await Book.findAll({
      where: {
        author: { [Op.like]: `%${author}%` }
      }
    });
    if (books.length === 0) 
      return res.status(404).json({ message: 'Nenhum autor encontrado com os parâmetros informados' });
    res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const addBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    if (!title || !author)
      return res.status(422).json({ message: 'Campos title e author obrigatórios!' });
    const book = await Book.create({ title, author, pageQuantity });
    res.status(201).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const updateBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;
    if (!title || !author)
      return res.status(422).json({ message: 'Campos title e author obrigatórios!' });
    await Book.update(
      { title, author, pageQuantity },
      { where: { id }}
    );
    res.status(204).end();
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await Book.destroy({ where: { id } });
    res.status(204).end();
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
  getBookByAuthor
}