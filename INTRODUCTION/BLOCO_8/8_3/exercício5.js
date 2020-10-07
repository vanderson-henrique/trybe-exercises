const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra 'a' maiúscula ou minúscula.

function containsA() {
  // escreva seu código aqui

  const count = names.reduce((accumulator, word) => {
    for (let i in word) {
      if (word[i] === 'a' || word[i] === 'A') {
        accumulator += 1;
      }
    }
    return accumulator;
  }, 0);
  return count;
}

console.log(containsA());
assert.deepEqual(containsA(), 20);