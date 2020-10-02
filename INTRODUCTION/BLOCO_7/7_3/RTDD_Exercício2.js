// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
const assert = require('assert');
const removeVowels = (word) => {
    const characters = word.split('');
    let results = [];
    let n = 1;
    for (let i = 0; i < characters.length; i += 1) {
      if (
        characters[i] === 'a' ||
        characters[i] === 'o' ||
        characters[i] === 'i' ||
        characters[i] === 'e' ||
        characters[i] === 'u'
      ) {
        results.push(n);
        n += 1;
      } else {
        results.push(characters[i]);
      }
    }
    results = results.join('');
    return results;
  };
    
  const parameter = 'Dayane';
  const result = 'D1y2n3';
  const output = removeVowels(parameter);
  assert.strictEqual(typeof(output), 'string');
  assert.strictEqual(output, result);