const assert = require('assert');
// escreva a função removeMiddle aqui

const removeMiddle = (arrayWords) => {
    let middleWord = [];
    const positionMeddle = Math.round((arrayWords.length)/2);
    middleWord.push(arrayWords[positionMeddle - 1]); // insira ao fim do array middleWord o que está no array 'arrayWord' na posição 3.
    arrayWords.splice(positionMeddle - 1, 1); // começando na posição '3' remova 1 elemento;
    return middleWord;
}

console.log(removeMiddle(['mouse', 'giraffe', 'queen', 'window', 'bottle']));

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepEqual(output, expectedOutput);
assert.deepEqual(words, expectedWords);