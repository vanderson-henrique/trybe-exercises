const Books = require('../models/Books');

const errors = {
  title_blank: 'O título é obrigatório',
  title_not_string: 'O título deve ser uma string',
  title_length: 'O título deve pelo menos 3 caracteres',
  authorId_blank: 'O Id do autor é obrigatório',
  authorId_not_number: 'O Id do autor deve ser um número',
  authorId_not_exists: 'O Id do autor deve existir na tabela autores'
}

const blank = (value) => (!value);
const isNotString = (value) => (typeof value !== 'string');
const isNotNumber = (value) => (typeof value !== 'number');
const isLengthLetterThan = (value, min) => (value.length < min);

const isValid = async (title, author_id) => {
  const code = 422;

  const idsAuthors = await Books.listIdsAuthors();

  switch(true) {
    case blank(title): return { code, message: errors.title_blank }
    case isNotString(title): return { code, message: errors.title_not_string }
    case isLengthLetterThan(title, 3): return { code, message: errors.title_length }
    case blank(author_id): return { code, message: errors.authorId_blank }
    case isNotNumber(author_id): return { code, message: errors.authorId_not_number }
    case (!idsAuthors.find(author => author.id === author_id)): return { code, message: errors.authorId_not_exists }
    default: return {};
  }  
}

module.exports = { isValid };
