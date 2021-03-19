const { questionFloat } = require('readline-sync');

function calculoIMC(peso, altura) {
  return (peso / Math.pow(altura, 2)).toFixed(2);
};

const peso = questionFloat('Digite o seu peso em KG: ');
const altura = questionFloat('Digite a sua altura em metros: ');

const IMC = calculoIMC(peso, altura);

console.log(`O seu IMC é: ${ IMC }`);
console.log('Sua situação é: ');

   if( IMC < 18.5 ){
    console.log('Abaixo do peso (magreza).');
   }
  else if( IMC >= 18.5 && IMC <= 24.9 ) {
    console.log('Peso normal.');
  }
  else if( IMC >= 25 && IMC <= 29.9 ) {
    console.log('Acima do peso (sobrepeso)');
  }
  else if( IMC >= 30 && IMC <= 34.9 ) {
    console.log('Obesidade grau I');
  }
  else if( IMC >= 35 && IMC <= 39.9 ) {
    console.log('Obesidade grau II');
  }
  else {
    console.log('Obesidade grau III e IV');
  }
