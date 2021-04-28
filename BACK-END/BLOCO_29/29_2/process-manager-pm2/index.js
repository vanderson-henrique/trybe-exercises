const express = require('express');

const app = express();

const AMBIENTE = process.env.AMBIENTE || 'Sem ambiente definido';

app.get('/', (req, res) => {
  res.status(200).send(AMBIENTE);
})

app.get('/bug', (req, res) => {
  console.log('Finalizando no bug')
  process.exit(1);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
