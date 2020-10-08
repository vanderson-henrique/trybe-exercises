const assert = require('assert')

const palio = ["Palio", "Fiat", 2019]
const shelbyCobra = ["Shelby Cobra", "Ford", 1963]
const chiron = ["Chiron", "Bugatti", 2016]

// Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, 
// cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Crie uma função toObject que,
// dada uma lista, retorna um objeto representando o carro:

// escreva toObject abaixo

const toObject = ([name, brand, year]) => ({name, brand, year});

console.log(toObject(palio));

assert.deepEqual(toObject(palio), { name: "Palio", brand: "Fiat", year: 2019 })
assert.deepEqual(toObject(shelbyCobra), { name: "Shelby Cobra", brand: "Ford", year: 1963 })
assert.deepEqual(toObject(chiron), { name: "Chiron", brand: "Bugatti", year: 2016 })