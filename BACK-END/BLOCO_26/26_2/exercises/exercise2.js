async function calculaNumber(num1, num2, num3) {
    if( typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
      return Promise.reject(new Error('Digite apenas números'));
    }

    const soma = num1 + num2;
    const resultado = soma * num3;
    if ( resultado < 50 ) Promise.reject(new Error('Valor muito baixo'));
    return console.log(resultado);
}

calculaNumber(10, 5, 4);