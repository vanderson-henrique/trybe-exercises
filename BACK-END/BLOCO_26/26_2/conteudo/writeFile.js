const fs = require('fs');

fs.writeFile('./meu-arquivo.txt', 'Meu textão', (err) => {
  if (err) {
    throw err;
  }
  console.log('Arquivo salvo');
});
