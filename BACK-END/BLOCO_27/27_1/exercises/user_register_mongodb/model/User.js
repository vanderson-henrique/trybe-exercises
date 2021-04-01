const connection = require('./connection');
const { ObjectId } = require('mongodb');

const isValid = (first_name, last_name, email, password) => {
  if (!first_name || typeof first_name !== 'string') return false;
  if (!last_name || typeof first_name !== 'string') return false;
  if (!email || typeof first_name !== 'string') return false;
  if (!password || typeof first_name !== 'string') return false;
  if (password.length < 6) return false;
  return true;
}

const insertUser = async (first_name, last_name, email, password) => {
  await connection()
    .then((db) => db.collection('users').insertOne({ first_name, last_name, email, password }));
};

const getAllUsers = async () => {
  const users = await connection()
    .then((db) => db.collection('users').find().toArray());
  
  return users;
}

const getUserById = async (id) => {
  const user = await connection()
    .then((db) => db.collection('users').findOne(ObjectId(id)));

  return user;
};

const verifyId = async (id) => {
  const user = await connection()
    .then((db) => db.collection('users').findOne({ _id: new ObjectId(id) }));

  if (!user) return false;
  return true;
}

const alterUser = async (first_name, last_name, email, password, id) => {
  await connection().
    then((db) => db.collection('users')
      .updateOne(
        { _id: new ObjectId(id) }, 
        {
          $set: {
            first_name,
            last_name,
            email,
            password
          }
        }
      ));
};

const deleteUser = async (id) => {
  await connection()
    .then((db) => db.collection('users').deleteOne({ _id: new ObjectId(id) }));
}

module.exports = { isValid, insertUser, getAllUsers, getUserById, alterUser, deleteUser, verifyId };
