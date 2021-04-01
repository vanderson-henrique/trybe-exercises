require('dotenv').config();
const express = require('express');

const lookupCep = require('./controllers/lookupCep');
const validaCEP = require('./middlewares/validaCEP');
const statistics = require('./controllers/statistics');

const app = express();

app.get('/lookup', validaCEP, lookupCep);
app.get('/statistic', statistics);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

