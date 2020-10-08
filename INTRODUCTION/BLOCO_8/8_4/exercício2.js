const assert = require('assert')

// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja:

// escreva sum abaixo

const sum = (...numbers) => numbers.reduce((soma, number) => soma + number, 0);

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)

// Forma mais extensa
/*const sum = (...numbers) => {
   return numbers.reduce((soma, number) => {
        return soma + number;
    }, 0);
}*/ 