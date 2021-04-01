const express = require('express');
const routerUser = require('./router/userRouter');

const app = express();

app.use(express.json());

app.use('/user', routerUser);

app.listen(3000, () => console.log('Servidor rodando no caminho http://localhost:3000'));