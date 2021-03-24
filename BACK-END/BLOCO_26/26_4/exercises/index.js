const express = require('express');

const routerSimpsons = require('./routerSimpsons');
const routerSignup = require('./routerSignup');
const middlewareAuthenticate = require('./tokenAuthenticate');

const app = express();

// Importando o body-parser para usar no JSON recebido no POST
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Importando o rescue para tratar os erros dos exercícios 7 ao 9
const rescue = require('express-rescue');

// Exercício 2
app.get('/ping', (req, res) => res.json({ "message": "Pong!" }));

//Exercício 3
/* app.post('/hello', (req, res) => {
  const name = req.body.name;
  res.send({ "message": `Hello ${ name }!` });
}); */

// Exercício 4
app.post('/hello', (req, res) => {
  const { name, age } = req.body;
  if( age > 17 ) return res.status(200).json({ "message": `Hello, ${ name }!`});
  res.status(401).json({ "message": "Unauthorized" });
});

// Exercício 5
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.send({ "message": `O seu nome é ${ name } e você tem ${ age } anos de idade!` });
});

// ----------------------------------------------------------------------------------------------

// chama as rotas do arquivo routerSimpsons, sempre que a rota começar com /simpsons
// passando antes pelo middleware de autenticação
app.use('/simpsons', middlewareAuthenticate, routerSimpsons);

// chama as rotas do arquivo routerSignup, sempre que as rotas começarem com /signup
app.use('/signup', routerSignup);

// Erro padrão para todas as rotas que usam o rescue
app.use((err, req, res, next) => {
  res.status(500).json({ error: `Erro: ${ err.message }` });
});

// Exercício Bônus - 1 (Caso não encontre a rota, ele cai nesta mensagem)
app.use((req, res) => {
  res.status(404).json({ "message": "Página não encontrada!" });
});

app.listen(3000, () => { console.log('Servidor rodando no caminho http://localhost:3000')});
