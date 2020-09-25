// Crie uma função que receba um número e retorne seu fatorial.
// resolvendo de com função normal
function fatorial (num) {
    let result = num;
    for (let i = 1; i < num; i += 1){
        result *= i;
    }
    return result;
}
// resolvendo com arrow function

const arrowFatorial = num => {
    let result = num;
    for (let i = 1; i < num; i += 1){
        result *= i;
    }
    return result;
}
// usando recursividade
function fatorialRecursivo (num){
    if (num <= 1){
        return 1;
    } else {
        return num * fatorialRecursivo(num - 1);
    }
}

// usando recursividade em 1 linha (operador ternário (? e :) o que vem antes dos : é o retorno se verdadeiro, o que vem depois se for falso)

const fatorialRecursivo1linha = num => num > 1 ? num * fatorialRecursivo1linha(num - 1):1;


console.log(fatorial(4));
console.log(arrowFatorial(4));
console.log(fatorialRecursivo(4));
console.log(fatorialRecursivo1linha(4));