// --- Instruções
// Escreva um programa que o console registre os números
// de 1 a n. Mas para múltiplos de três impressão
// “fizz” em vez do número e para os múltiplos
// de cinco imprime “buzz”. Para números que são múltiplos
// de três e cinco imprimem “fizzbuzz”.
// --- Exemplo
// fizzBuzz(5);
// 1
// 2
// fizz
// 4
// buzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) console.log("fizzbuzz");
    else if (i % 3 === 0) console.log("fizz");
    else if (i % 5 === 0) console.log("buzz");
    else console.log(i);
  }
}

module.exports = fizzBuzz;
