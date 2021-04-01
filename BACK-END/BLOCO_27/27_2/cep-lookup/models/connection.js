const { MongoClient } = require('mongodb');

// URL para conexão no banco de dados
// const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

const connection = async () => {
  return MongoClient
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db(process.env.DB_NAME)) // Qual banco se está usando
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};

module.exports = connection;