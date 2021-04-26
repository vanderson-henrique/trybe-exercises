const express = require('express');
const routerUser = require('./routes/routerUser');

const app = express();
app.use(express.json());

app.use('/user', routerUser);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
