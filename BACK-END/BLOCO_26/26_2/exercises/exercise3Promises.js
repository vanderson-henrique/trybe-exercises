const { question } = require('readline-sync');
const fs = require('fs');

function lendoArquivosComPromises() {
  return new Promise((resolve, reject) => {
    const file = question('Digite o nome do arquivo: ');

    fs.readFile(file, 'utf8', (err, data) => {
      if (err) reject(new Error(`Não foi possível ler o arquivo: ${ file }. /n Erro: ${ err }`));
      resolve(data);
    });
  });
}

lendoArquivosComPromises()
  .then(response => {
    console.log(`Conteúdo do arquivo: ${ response }`);
    console.log(`Tamanho do arquivo: ${ response.byteLength } bytes`);
  })
  .catch(err => console.log(err));
