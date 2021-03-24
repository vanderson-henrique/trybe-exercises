const { question } = require('readline-sync');
const fs = require('fs');

function lendoArquivosComCallback() {
 const file = question('Digite o nome do arquivo: ');
  let content = '';
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) return console.error(`Não foi possível ler o arquivo: ${ file }. /n Erro: ${ err }`);
    console.log(`Conteúdo do arquivo: ${ data }`);
    content = data;
  });
  const substitutedWord = question('Insira a palavra que deseja substituir: ');
  const newWord = question('Qual a palavra que deseja inserir: ');
  replace(new RegExp(substitutedWord, content), newWord);
  console.log(content);
}

lendoArquivosComCallback();
