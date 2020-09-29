const assert = require('assert');

//assert.equal(50, 50);
//assert.equal(50, 70);

function division (x, y) {
    return x/y;
}

const expected = division(9, 3);
// assert(expected === 3, 'Este não é o resultado da divisão de 9 por 3');
// assert.strictEqual(expected, 3, 'This is not the result of the division');
// assert.ok(expected === 3, 'This is not the result of the division');
// assert.notStrictEqual(expected, 3, 'Divisão incorreta!');
assert.strictEqual(division(8,4), 2);