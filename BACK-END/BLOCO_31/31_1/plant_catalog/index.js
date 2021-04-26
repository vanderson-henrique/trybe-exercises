const express = require('express');
const plantsRouter = require('./routes/plantsRouter');

const app = express();
app.use(express.json());

app.use(plantsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
