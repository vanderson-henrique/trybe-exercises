require('dotenv').config();
const express = require('express');

const routerLookupCep = require('./controllers/lookupCep');
const routerStatistics = require('./controllers/statistics');

const app = express();

app.use('/lookup', routerLookupCep);
app.use('/statistic', routerStatistics);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

