// Utiliza o 'promise' já que as consultas em BD são demorados e precisam ser assíncronas
const mysql = require('mysql2/promise');

// Cria-se um pool de conexões para que não precise criar um para cada conexão que se quiser fazer
// Estes são os usuário, senha, host e banco de dados que se irá utilizar.
const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

module.exports = connection;
