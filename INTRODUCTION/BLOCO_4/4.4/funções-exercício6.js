/*Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5.
Valor esperado no retorno da função: 1+2+3+4+5 = 15. */

function soma (n){
    let somaN = 0;
    for (let i = n; i > 0; i -= 1){
        somaN += i;
    }
    return somaN;

}

console.log(soma(5));