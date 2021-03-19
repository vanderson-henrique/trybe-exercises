const inquirer = require('inquirer');

function fatorial(n) {
  let resultado = n;
  for( let index = n - 1; index > 0; index -= 1 ){
    resultado *= index;
  }
  return resultado;
}

function isInteger (number) {
  return parseInt(number) === parseFloat(number);
}

function validateNumber(input) {
  if (input < 0) return 'Insira um número maior que 0.';
  if (Number.isNaN(input) || !isInteger(input)) return 'Insira um número inteiro';
  return true;
}

async function calculaFatorial() {
  const answer = await inquirer.prompt([
    { name: 'n', 
      type: 'input',
      message: 'Insira um número para saber o seu fatorial: ',
      validate: validateNumber 
    },
  ]);

  const n = parseInt(answer.n, 10);
  const resultFatorial = fatorial(n);
  console.log(`O fatorial do número ${ n } é: ${ resultFatorial }`)

}

calculaFatorial();
