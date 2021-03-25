const express = require('express');
const app = express();

app.use(express.json());

// ---------------Atividade 1 ---------------------------------------------------------
const routerLogin = require('./Login/routerLogin');
const validaEmailSenha = require('./Login/validaEmailSenha');
const criaToken = require('./Login/criaToken');

// Caminho percorrido para validar email, senha, gerar token e retornar para o usuário
app.use('/login', validaEmailSenha, criaToken, routerLogin);
// ------------------------------------------------------------------------------------
// ---------------Atividade 2 ---------------------------------------------------------
const routerToken = require('./TokenValid/routerToken');
const validaToken = require('./TokenValid/validaToken');

app.use('/btc/price', validaToken, routerToken);
// ------------------------------------------------------------------------------------
// ---------------Atividade 3 ---------------------------------------------------------
const routerPosts = require('./PostsId/routerPost');

app.use('/posts', routerPosts);
//-------------------------------------------------------------------------------------
// ---------------Atividade 4 ---------------------------------------------------------
const routerUser = require('./Users/routerUser');
const filterComments = require('./Users/filterComents');

app.use('/user/:name',filterComments, routerUser);
//-------------------------------------------------------------------------------------
// ---------------Atividade 5 ---------------------------------------------------------
const routerOperations = require('./Operations/routerOperations');
const soma = require('./Operations/soma');
const subtração = require('./Operations/subtração');
const multiplicação = require('./Operations/multiplicação');
const divisão = require('./Operations/divisão');

app.use('/:operacao/:numero1/:numero2',soma, subtração, multiplicação, divisão, routerOperations);
//--------------------------------------------------------------------------------------
// ---------------Atividade 6 ----------------------------------------------------------
const routerRecipe = require('./Recipe/routeRecipe');
const deleteRecipe = require('./Recipe/deleteRecipes');

app.use('/recipe/:id', deleteRecipe, routerRecipe);
app.use('/recipe', routerRecipe);
//--------------------------------------------------------------------------------------
// ---------------Atividade 7 ----------------------------------------------------------
const routerRecipe2 = require('./Recipe2/routerRecipe2');
const changeRecipes = require('./Recipe2/changeRecipes');

app.use('/recipe2/:id',changeRecipes, routerRecipe2);
//--------------------------------------------------------------------------------------

const routerComments = require('./Comments/routerComments');
const filterComments2 = require('./Comments/filterComments');

app.use('/comments',filterComments2, routerComments);


app.use((err, req, res, next) => {
  res.status(500).json({ erro: err.message });
})

app.listen(3000, () => console.log('Servidor rodando no caminho http://localhost:3000'));
