const connection = require('./connection');

// Busca todos os autores do banco.

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
  );
  return authors;
};

const findById = async (id) => {
  const [[authorData]] = await connection.execute(
    'SELECT  id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?',
    [id]
  );

  return authorData;
};

const create = async (firstName, middleName, lastName) => connection.execute(
  'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
  [firstName, middleName, lastName],
);

module.exports = {
  getAll,
  findById,
  create
};