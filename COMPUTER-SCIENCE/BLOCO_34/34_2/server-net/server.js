const net = require('net');

const server = net.createServer((socket) => {
  socket.write('Olá cliente!\n');
  socket.on('data', (data) => {
    console.log(data.toString());
  });
});

const PORT = 8085;
server.listen(PORT);

console.log(`Servidor rodando na porta ${PORT}`);
