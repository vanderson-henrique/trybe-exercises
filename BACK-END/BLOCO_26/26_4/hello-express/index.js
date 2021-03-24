const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs').promises; // este é um módulo do pacote fs que nos permite usa funções que retornam promises, assim podemos usar ele com async/await como visto abaixo.
const rescue = require('express-rescue');

// o rescue faz o tratamento de erro, caso não seja possível ler o arquivo ele manda para
// o primeiro middleware de erro que encontrar

app.get('/:fileName', rescue(async (req, res) => {
  const file = await fs.readFile(`./${req.params.fileName}`);
  res.send(file.toString('utf-8'));
}
));

app.use(bodyParser.json()); // Aqui o body-parser entra convertendo o body para JSON

app.post('/samba', (req, res) => {
  const nome = req.body.name
  res.send(`Meu nome é ${nome} e manjo dos sambas`)
})

app.get('/', (req, res) => {
  res.send("Hello world");
});

app.get('/hello', (req, res) => {
  const name = req.query.name;

  res.status(200)
    .json({ message: `Hello, ${name}` });
});

// meddleware de erro
app.use((err, req, res, next) => {
  res.status(500).json({ error: `Erro: ${err.message}`})
});

app.listen(3000);
