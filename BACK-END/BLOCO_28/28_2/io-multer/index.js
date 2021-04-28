const express = require('express');
const app = require('./app');
const path = require('path');

const uploadsRouter = require('./router/uploadsRouter');
const enviosRouter = require('./router/enviosRouter');

app.use(express.json());

/* Definindo nossa pasta pública, sintaxe:
  app.use('Caminho para acessar rota na URL do navegador ou ferramenta',
    express.static('Caminho da pasta pública, ou seja que disponibiliza os arquivos da sua aplicação'));
*/
app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));

app.use('/uploads', uploadsRouter);
app.use('/envios', enviosRouter);

// middleware de erro padrão para retornar mensagem para o usuário e mostrar no console qual o erro
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Deu ruim' });
})

const PORT = 3000;
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
