const { questionFloat } = require('readline-sync');

function calculoIMC(peso, altura) {
  return (peso / Math.pow(altura, 2)).toFixed(2);
};

const peso = questionFloat('Digite o seu peso em KG: ');
const altura = questionFloat('Digite a sua altura em metros: ');

const IMC = calculoIMC(peso, altura);

console.log(`O seu IMC é: ${ IMC }`);
