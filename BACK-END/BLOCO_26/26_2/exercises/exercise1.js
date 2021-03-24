function calculaNumber(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    if( typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') 
      reject(new Error('Digite apenas números'));

    const soma = num1 + num2;
    const resultado = soma * num3;
    if ( resultado < 50 ) reject(new Error('Valor muito baixo'));
    resolve(resultado);
  });
}

calculaNumber(10, "e", 4)
  .then(resultado => console.log(`O resultado é: ${ resultado }`))
  .catch(erro => console.log(erro));

