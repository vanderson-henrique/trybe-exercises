const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

// Dada uma matriz de matrizes, transforme em uma única matriz.

function flatten() {
  // escreva seu código aqui
  const newArray = arrays.reduce((acc, element) => {
        console.log(acc);
       return acc.concat(element); 
    }, []);
        return newArray;
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);

