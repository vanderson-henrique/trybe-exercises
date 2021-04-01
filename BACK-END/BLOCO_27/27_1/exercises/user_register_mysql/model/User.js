const connection = require('./connection');

const isValid = (first_name, last_name, email, password) => {
  if (!first_name || typeof first_name !== 'string') return false;
  if (!last_name || typeof first_name !== 'string') return false;
  if (!email || typeof first_name !== 'string') return false;
  if (!password || typeof first_name !== 'string') return false;
  if (password.length < 6) return false;
  return true;
}

const insertUser = async (first_name, last_name, email, password) => {
  await connection.execute(
    'INSERT INTO user_registration.users (first_name, last_name, email, password) VALUES (?,?,?,?)',
    [first_name, last_name, email, password]
  );
};

const getAllUsers = async () => {
  const [users] = await connection.execute(
    'SELECT * FROM user_registration.users;'
  );
  return users;
}

const getUserById = async (id) => {
  const [user] = await connection.execute(
    'SELECT * FROM user_registration.users WHERE id = ?;',
    [id]
  );
  return user;
};

const verifyId = async (id) => {
  const [user] = await connection.execute(
    'SELECT * FROM user_registration.users WHERE id = ?;',
    [id]
  );

  if (user.length === 0) return false;
  return true;
}

const alterUser = async (first_name, last_name, email, password, id) => {
  await connection.execute(
    'UPDATE user_registration.users SET first_name = ?, last_name = ?, email = ?,password = ? WHERE id = ?;',
    [first_name, last_name, email, password, id]
  );
};

const deleteUser = async (id) => {
  await connection.execute(
    'DELETE FROM user_registration.users WHERE id = ?;',
    [id]
  );
}

module.exports = { isValid, insertUser, getAllUsers, getUserById, alterUser, deleteUser, verifyId };
