const assert = require('assert');

const getLargestNumber = (array) => {
    let largestNumber;
    for (let i = 0; i < array.length; i += 1) {
        if (largestNumber < array[i]) {
            largestNumber = array[i];
        }
    }
    return largestNumber;
}


const array1 = [4500, 8, 2, 500, 1, 7, 99];
const parameter1 = getLargestNumber(array1);
const result1 = 4500;
assert.strictEqual(parameter1, result1);

const array2 = [0, 0, 0, 0, 0, 0, 0];
const parameter2 = getLargestNumber(array2);
const result2 = 0;
assert.strictEqual(parameter2, result2);

const array3 = [45, 8, 2, 5, 1, 7, 99];
const parameter3 = getLargestNumber(array3);
const result3 = 99;
assert.strictEqual(parameter3, result3);

const array4 = [-67, -8, -2, -500, -1, -7, -99];
const parameter4 = getLargestNumber(array4);
const result4 = -1;
assert.strictEqual(parameter4, result4);
