const express = require('express');
const app = express();
const routerExemplo = require('./routeExemplo');
const middlewareData = require('./middlewareData');

app.use('/', middlewareData, routerExemplo);

app.use((err, req, res, next) => {
  res.json({ "message": `Erro: ${ err.message }`})
});

app.listen(3000, () => console.log('Servidor executando no caminho http://localhost:3000'));

