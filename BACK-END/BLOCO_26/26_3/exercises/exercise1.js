const fs = require('fs');

const arquivo1 = './arquivo1.pdf';
const arquivo2 = './arquivo2.pdf';

function read2FileSinc() {
  const startScript = Date.now();
  const startFile1 = Date.now();
  const read1 = fs.readFileSync(arquivo1);
  const timeReadFile1 = Date.now() - startFile1;
  console.log(`O tamanho do arquivo ${ arquivo1 } é: ${ read1.byteLength } bytes.`);
  console.log(`O tempo de leitura do arquivo 1 foi de: ${ timeReadFile1 } ms`);
  console.log('-------------------------');
  const startFile2 = Date.now();
  const read2 = fs.readFileSync(arquivo2);
  const timeReadFile2 = Date.now() - startFile2;
  console.log(`O tamanho do arquivo ${ arquivo2 } é: ${ read2.byteLength } bytes.`);
  console.log(`O tempo de leitura do arquivo 2 foi de: ${ timeReadFile2 } ms`);
  console.log('-------------------------');
  const timeExecuteScript = Date.now() - startScript;
  console.log(`O tempo total de execução do script foi de: ${ timeExecuteScript } ms`);
}

read2FileSinc();
