const connection = require('./connection');

const getAll = async (id) => {

  if (id) {
    const [books] = await connection.execute(
      `SELECT * FROM model_example.books WHERE id =?;`, [id]
    );
    return books;
  }

  const [books] = await connection.execute(
    'SELECT * FROM model_example.books;'
  );
  return books;
};

const findById = async (id) => {
  const [book] = await connection.execute(
    'SELECT * FROM model_example.books WHERE id = ?',
    [id]
  );
  return book;
}

const listIdsAuthors = async () => {
  const [ids] = await connection.execute(
    'SELECT id FROM model_example.authors;'
  );
  return ids;
}

const create = async (title, author_id) => {
  return connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, author_id],
  );
}

module.exports = { getAll, findById, listIdsAuthors, create };
