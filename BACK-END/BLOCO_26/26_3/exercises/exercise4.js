const fs = require('fs').promises;

const directory = './arquivos';
let sumFiles = 0;


async function listarArquivos() {
  const startScript = Date.now();
  const listOfFiles = await fs.readdir(directory);
  console.log(`Existem na pasta ${ directory } ${ listOfFiles.length } arquivos.`)

  for (let i = 0; i < listOfFiles.length; i += 1) {
    const file = await fs.readFile(listOfFiles[i]);
    sumFiles += file.byteLength;
  }

  console.log(`Todos os arquivos somados tem ${ sumFiles } bytes.`);

  const timeTotal = Date.now() - startScript;
  console.log(`O tempo total para execução do script foi de: ${ timeTotal } ms.`)

}

listarArquivos();