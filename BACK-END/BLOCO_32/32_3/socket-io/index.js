const app = require('express')();
const http = require('http').createServer(app);

const cors = require('cors');
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // métodos que serão aceitos pela url
  }
});

app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// abrindo a conexão via socket.io (Todos os eventos são criados dentro desta connection)
io.on('connection', (socket) => {
  console.log('Usuário conectado');

  // ele executa esta função quando o socket é desconectado (refresh ou fechar a página)
  socket.on('disconnect', () => {
    console.log('Usuário desconectado');
  });

  // Para criar eventos personalizados, é só dar um socket.on e passar como primeiro parâmetro
  // o nome do evento que será escutado e no segundo uma função para ser executada sempre que ele
  // for chamado (podendo ou não ter um parâmetro junto); 
  socket.on('mensagem', (msg) => {
    io.emit('mensagemServer', { mensagem: msg })
  });

  // O emit serve para mandar uma mensagem para o cliente, neste caso, assim que ele se conecta
  // o primeiro parâmetro é o nome do evento (ola) e o segundo é a mensagem, que pode ser string
  // ou objeto por exemplo.
  // Para o cliente receber esta mensagem, ele deve estar escutando (socket.on) pelo nome deste
  // evento (ola)
  socket.emit('ola', 'Olá, que bom que você entrou!');

  // Com a função 'broadcast' enviamos a mensagem para todas as outras conexões, exceto o que
  // enviou a mensagem
  socket.broadcast.emit('mensagemServer', { mensagem: 'Fulano acabou de se conectar' });

});


const PORT = process.env.PORT || 3000;
http.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
