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
  lastName: authorData.last_name
});

const getAll = async () => {
  const authors = await Author.getAll();

  return authors.map(serialize).map(getNewAuthor);
}

const findById = async (id) => {
  const author = await Author.findById(id);

  if (!author) return false;
  
  const { firstName, middleName, lastName } = serialize(author);

  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName,
  });

}

const create = async (firstName, middleName, lastName) => {
  const [{insertId}] = await Author.create(firstName, middleName, lastName);

  return ({
    id: insertId,
    firstName,
    middleName,
    lastName
  });
}

module.exports = { getAll, findById, create };
