const { Authors } = require('../models');
const isValid = require('../middlewares/validateData');

const listAuthors = async (req, res) => {
  const authors = await Authors.findAll();
  res.status(200).render('authors/index', { authors });
};

const showAuthor = async (req, res) => {
  const { id } = req.params;
  const author = await Authors.findByPk(id);
  if (!author) return res.status(404).render('404');
  res.status(200).render('authors/show', { author });
};

const newAuthor = (req, res) => {
  res.render('authors/new', { message: null });
};

const createAuthor = async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  if (!isValid(first_name, middle_name, last_name)) {
    return res.render('authors/new', { message: 'Dados inválidos' });
  }
  await Authors.create({ first_name, middle_name, last_name });
  res.redirect('authors');
};

module.exports = {
  listAuthors,
  showAuthor,
  newAuthor,
  createAuthor
}