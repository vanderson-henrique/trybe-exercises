// const net = require('net');
// /* Através do pacote NET, nós podemos não só criar servidores como podemos conectar nossos 
// clientes aos servidores */
// const client = net.connect({ port: 8080 }, () => {
//   console.log('Cliente conectado ao servidor!');
// });

// /* Assim como no servidor, também temos eventos do lado do cliente, onde o evento 'data'
//  é ativado quando o servidor envia uma mensagem para o cliente. */
// client.on('data', (data) => {
//   console.log(data.toString());
//   client.end();
// });

// /* Quando a conexão é interrompida/terminada, é ativado o evento 'end', onde podemos limpar
//  alguns caches, dar uma mensagem para usuário, atualizar algum dado no banco de dados etc. */
// client.on('end', () => {
//   console.log('Desconectado do servidor');
// });

const net = require('net');
const client = new net.Socket();

// função que captura dados digitados no terminal
const stdin = process.openStdin();

// conexão com o socket do servidor através da porta e do IP
client.connect(2708, '127.0.0.1', () => {
  stdin.addListener('data', (msg) => {
    const message = msg.toString().trim();

    client.write(message);
  });
});

client.on('data', (data) => {
  console.log('' + data);
});

client.on('close', () => {
  console.log('Você saiu da sala...');
});