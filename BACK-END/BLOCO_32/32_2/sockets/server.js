// /* Importando o pacote NET, responsável pela implementação dos sockets no Node. */
// const net = require('net');

// /* Criando o servidor com o método 'createServer', onde recebe uma conexao na qual 
// são expostos os eventos que podemos manipular no nosso servidor. */
// const server = net.createServer((connection) => {
//   console.log('Cliente conectado');

//   /* Assim como um evento normal do Node.js, o método ".on()" escuta um evento em específico
//    e, quando ele é ativado, nossa função de callback é chamada. */
//   connection.on('end', () => {
//     console.log('Cliente desconectado');
//   });
//   /* Nessa conexão que foi aberta, podemos fazer várias coisas. Uma delas é escrever/devolver 
//   uma mensagem para o cliente. */
//   connection.write('Mensagem do servidor!\r\n');
//   connection.pipe(connection);
//   server.getConnections((_err, count) => {
//     console.log(`Estão de pé ${count} conexões!`)
//   })
// });

// /* Após termos programado o servidor, é só colocá-lo de pé */
// server.listen(8080, () => {
//   console.log('Servidor escutando na porta 8080');
// });

const net = require('net');
const PORT = 2708;

const sockets = [];
let userID = 0;

const server = net.createServer((socket) => {
  userID++;
  socket.user = `User-${userID}`;
  sockets.push(socket);
  socket.write(`Seja bem vindo ${socket.user}`);

  // A função disparo usa o método (write) para enviar para todas as instancias abertas alguma
  // mensagem. Neste caso, faz sentido ele não enviar a mensagem para quem o enviou, somente para
  // os demais.
  const disparo = (from, message) => {
    sockets.forEach((socket) => {
      if(socket.user === from) return;
      socket.write(message);
    });
  }

  // Sempre que for aberta uma nova conexão com este socket, esta mensagem será exibida
  disparo(socket.user, `O ${socket.user} entrou na sala...`);

  // Sempre que uma informação é mandanda, ela pode ser escutada pelo evento 'data', e o que vem
  // dentro do parametro da callback é a informação enviada (em forma de bits)
  socket.on('data', (data) => {
    const message = `${socket.user} > Disse: ${data.toString()}`;
    disparo(socket.user, message);
  });

  // O evento 'end' é executado sempre a conexão é encerrada, neste caso o usuário é excluído do
  // array e é enviado uma mensagem para os outros através da função 'disparo'
  socket.on('end', () => {
    sockets.splice(sockets.indexOf(socket), 1);
    const message = `${socket.user} deixou a sala!`;
    disparo(socket.user, message);
  });

  // O evento error, captura o erro que aconteceu
  socket.on('error', (e) => {
    console.log(`Aconteceu o seguinte erro no socket: ${e.message}`)
  })
})

server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));