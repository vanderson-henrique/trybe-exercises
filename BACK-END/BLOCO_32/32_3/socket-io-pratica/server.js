const express = require('express');
const app = express();
const http = require('http').createServer(app);
const cors = require('cors');
const bodyParser = require('body-parser');

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
const users = [];
let index = 0;

io.on('connection', (socket) => {
  const user = users[index].nickname;
  console.log(`Usuário ${user} conectado!`);

  socket.emit('initialMessage', { message: `Seja bem vindo ${user}` });
  socket.broadcast.emit('serverMessage', { message: `O usuário ${user} se conectou...` });

  socket.on('message', (msg) => {
    io.emit('serverMessage', { message: `${user} disse: ${msg}` });
  })


  socket.on('disconnect', () => {
    console.log(`Usuário ${user} desconectado!`);
    socket.broadcast.emit('serverMessage', { message: `O usuário ${user} se desconectou...`})
  });
  index ++;
})


app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (_req, res) => {
  res.render('login');
})

app.get('/chat', (req, res) => {
  res.render('home');
})

app.post('/nick', (req, res) => {
  const { nickname } = req.body;
  user = { nickname };
  users.push(user);
  res.redirect('/chat');
})

const PORT = 3000;
http.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));