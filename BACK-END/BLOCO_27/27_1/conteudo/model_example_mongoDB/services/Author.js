// Esta camada será responsável por todas as lógicas (regras de negócio);

const Author = require('../models/Author');

// Cria uma string com o nome completo do autor

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;
  
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');
  
  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

// Serializa o nome dos campos de snake_case para camelCase

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name});

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

const getAll = async () => {
  const authors = await Author.getAll();

  return authors.map(getNewAuthor);
}

const findById = async (id) => {
  const author = await Author.findById(id);

  if (!author) return null;

  const { firstName, middleName, lastName } = author;

  return getNewAuthor({ id, firstName, middleName, lastName });
}

const create = async (firstName, middleName, lastName) => {
  const userValid = isValid(firstName, middleName, lastName);

  if (!userValid) return false;

  const { insertedId } = await Author.create(firstName, middleName, lastName);

  return getNewAuthor({
    id: insertedId,
    firstName,
    middleName,
    lastName
  });
}

module.exports = { getAll, findById, create };
