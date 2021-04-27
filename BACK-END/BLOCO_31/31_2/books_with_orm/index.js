const express = require('express');
const routerBooks = require('./routes/routerBooks');

const app = express();
app.use(express.json());

app.use(routerBooks);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
