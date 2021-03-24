const { question } = require('readline-sync');
const path = require('path');
const fs = require('fs');

async function lendoArquivosAsyncAwait() {
  const file = question('Digite o nome do arquivo: ');

  fs.readFile(path.resolve(__dirname, file), (err, data) => {
    if (err) {
      return Promise.reject(new Error(`Não foi possível ler o arquivo: ${ file }. /n Erro: ${ err.message }`));
    }
    console.log(`Conteúdo do arquivo: ${ data.toString('utf8') }`);
    console.log(`Tamanho do arquivo: ${ data.byteLength } bytes`);
  });
}

lendoArquivosAsyncAwait();