// Utiliza o 'promise' já que as consultas em BD são demorados e precisam ser assíncronas
const mysql = require('mysql2/promise');

// Cria-se um pool de conexões para que não precise criar um para cada conexão que se quiser fazer
// Estes são os usuário, senha, host e banco de dados que se irá utilizar.
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'user_registration'
});

module.exports = connection;