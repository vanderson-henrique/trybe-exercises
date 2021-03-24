const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Informe o caminho do arquivo: ', (sourcePath) => {
  fs.readFile(path.resolve(__dirname, sourcePath), (err, file) => {
    if (err) return console.log(`Erro ao ler arquivo: ${err.message}`);

    rl.question('Informe o texto que deseja substituir: ', (oldText) => {
      rl.question('Informe o novo texto: ', (newText) => {
        const newContent = file.toString('utf8').replace(new RegExp(oldText, 'g'), newText);

        console.log('Novo conteúdo');
        console.log('-----------------');
        console.log(newContent);

        rl.question('Digite o caminho do arquivo de destino: ', (destPath) => {
          fs.readFile(path.join(__dirname, destPath), (err, file) => {
            if (!err) {
              rl.question('Deseja realmente sobrescrever o arquivo? (s/n): ', (proceed) => {
                if (proceed !== 's') return rl.close();

                fs.writeFile(path.join(__dirname, destPath), newContent, () => {
                  rl.close();
                });
              });
              return;
            }

            fs.writeFile(path.join(__dirname, destPath), newContent, () => {
              rl.close();
            });
          });
        });
      });
    });
  });
});


