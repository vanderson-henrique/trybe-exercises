const fs = require('fs');

const startScript = Date.now();
let timeReadFile1;
let timeReadFile2;

const arquivo1 = './arquivo1.pdf';
const arquivo2 = './arquivo2.pdf';

function calculaTime() {
  if(timeReadFile1 && timeReadFile2) {
    const timeExecuteScript = Date.now() - startScript;
    console.log(`O tempo total de execução do script foi de: ${ timeExecuteScript } ms`);
  }
}
  const startFile1 = Date.now();

  fs.readFile(arquivo1, (err, data) => {
    timeReadFile1 = Date.now() - startFile1;
    if(err) throw new Error ('Arquivo não encontrado');
    console.log(`O tamanho do arquivo ${ arquivo1 } é: ${ data.byteLength } bytes.`);
    console.log(`O tempo de leitura do arquivo 1 foi de: ${ timeReadFile1 } ms`);
    console.log('-------------------------');
    calculaTime();
  });

  const startFile2 = Date.now();

  fs.readFile(arquivo2, (err, data) => {
    timeReadFile2 = Date.now() - startFile2;
    if(err) throw new Error ('Arquivo não encontrado');
    console.log(`O tamanho do arquivo ${ arquivo2 } é: ${ data.byteLength } bytes.`);
    console.log(`O tempo de leitura do arquivo 1 foi de: ${ timeReadFile2 } ms`);
    console.log('-------------------------');
    calculaTime();
  });
