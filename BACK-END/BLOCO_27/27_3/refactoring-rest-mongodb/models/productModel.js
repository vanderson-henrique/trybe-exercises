const { ObjectId } = require('bson');
const connection = require('./connection');

const add = async (name, brand) => {
  try {
    const { insertedId } = await connection()
      .then((db) => db.collection('products').insertOne({ name, brand }));
    return ({
      id: insertedId,
      name,
      brand
    });

  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getAll = async () => {
  try {
    const users = await connection()
      .then((db) => db.collection('products').find().toArray());

    return users;

  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getById = async (id) => {
  try {
    const user = await connection()
      .then((db) => db.collection('products').findOne(ObjectId(id)));

    return user;

  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const update = async (id, name, brand) => {
  try {
    
    const alterUser = await connection()
      .then((db) => db.collection('products')
        .updateOne(
          { _id: new ObjectId(id) },
          {
            $set: {
              name,
              brand
            }
          }
        )
      );

      return alterUser;

  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const exclude = async (id) => {
  try {
    const product = await getById(id);
    if (!product) return false;
    
    await connection()
      .then((db) => db.collection('products').deleteOne({ _id: new ObjectId(id) }));

    return product;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = { add, getAll, getById, update, exclude };