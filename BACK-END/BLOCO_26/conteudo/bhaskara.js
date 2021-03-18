// const readline = require('readline-sync');
const { questionInt } = require('readline-sync');
// const functions = require('./functions');
const { calculaDelta, calculaX } = require('./functions');

function calculaBhaskara () {
  const a = questionInt('Digite o valor de a: ');
  const b = questionInt('Digite o valor de b: ');
  const c = questionInt('Digite o valor de c: ');
  
  const delta = calculaDelta(a, b, c);

  if ( delta < 0 ) {
    console.log(`Delta não pode ser negativo. Valor de Delta: ${ delta }`);
    return;
  }
  console.log(`Delta: ${ delta }`);
  const resultado = calculaX(a, b, delta);
  
  console.log(`Os valores de bháskara são: ${resultado.x1} e ${resultado.x2}`);
}

calculaBhaskara();
