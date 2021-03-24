const inquirer = require('inquirer');

function fibonacci(n) {
  const sequencia = [1];
  if ( n > 1 ) sequencia.push(2);
  if ( n > 2 ) {
    for ( let i = n - 2; i > 0; i -= 1 ) {
      const nextNumber = sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
      sequencia.push(nextNumber);
    }
  }
  return sequencia;
}

function isInteger(value) {
  return parseInt(value) === parseFloat(value);
}

function validateNumber(input) {
  if (Number.isNaN(input) || !isInteger(input)) return 'Insira um número inteiro!';
  return true;
}

async function calculaFibonacci() {
  const answer = await inquirer.prompt([
    {
      name: 'n',
      type: 'input',
      message: 'Insira um número inteiro para saber a sequencia de Fibonacci: ',
      validate: validateNumber
    }
  ])

  const n = parseInt(answer.n, 10);
  const result = fibonacci(n);
  console.log(`A sequencia de Fibonacci para o número: ${ n } é: ${ result }`)

};

calculaFibonacci();
