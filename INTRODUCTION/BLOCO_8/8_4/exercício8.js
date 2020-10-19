const assert = require('assert')

//Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:

// escreva greet abaixo

const greet = (name, greeting = 'Hi') => `${greeting} ${name}`;

assert.equal(greet("John"), "Hi John")
assert.equal(greet("John", "Good morning"), "Good morning John")
assert.equal(greet("Isabela", "Oi"), "Oi Isabela")


function animalMap(options) {
  animalReportByRegion = data.animals.reduce((categorized, animal, index) => {
    const animalsInRegion = data.animals.filter(animal1 => animal.location === animal1.location)
    .map(objectAnimal => objectAnimal.name);
    const animalsNameInRegion = data.animals.filter(animal2 => animal.location === animal2.location)
    .map(objectAnimal2 => objectAnimal2.residents.reduce((acc, resident) => {
      acc[objectAnimal2.name] = objectAnimal2.residents.map(resident => resident.name);
      return acc;
    }, {}));
    const orderedAnimals = data.animals.filter(animal2 => animal.location === animal2.location)
    .map(objectAnimal2 => objectAnimal2.residents.reduce((acc, resident) => {
      acc[objectAnimal2.name] = objectAnimal2.residents.map(resident => resident.name).sort();
      return acc;
    }, {}));
    const femaleAnimals = data.animals.filter(animal2 => animal.location === animal2.location)
    .map(objectAnimal2 => objectAnimal2.residents.reduce((acc, resident) => {
      acc[objectAnimal2.name] = objectAnimal2.residents.filter(female => female.sex === 'female')
      .map(resident => resident.name);
      return acc;
    }, {}));
    const maleAnimals = data.animals.filter(animal2 => animal.location === animal2.location)
    .map(objectAnimal2 => objectAnimal2.residents.reduce((acc, resident) => {
      acc[objectAnimal2.name] = objectAnimal2.residents.filter(female => female.sex === 'male')
      .map(resident => resident.name);
      return acc;
    }, {}));
    const orderedFemaleAnimals = data.animals.filter(animal2 => animal.location === animal2.location)
    .map(objectAnimal2 => objectAnimal2.residents.reduce((acc, resident) => {
      acc[objectAnimal2.name] = objectAnimal2.residents.filter(female => female.sex === 'female')
      .map(resident => resident.name).sort();
      return acc;
    }, {}));
    const orderedMaleAnimals = data.animals.filter(animal2 => animal.location === animal2.location)
    .map(objectAnimal2 => objectAnimal2.residents.reduce((acc, resident) => {
      acc[objectAnimal2.name] = objectAnimal2.residents.filter(female => female.sex === 'male')
      .map(resident => resident.name).sort();
      return acc;
    }, {}));
    if (options === undefined) {
    categorized[animal.location] = animalsInRegion;
    } else if (options.includeNames === undefined && (options.sex === 'female' || options.sorted === true)) {
      categorized[animal.location] = animalsInRegion;
    } else if ( options.includeNames === true && options.sex === 'female' && options.sorted === true) {
      categorized[animal.location] = orderedFemaleAnimals;
    } else if ( options.includeNames === true && options.sex === 'male' && options.sorted === true) {
      categorized[animal.location] = orderedMaleAnimals; 
    } else if ( options.includeNames === true && options.sex === 'female') {
      categorized[animal.location] = femaleAnimals;
    } else if ( options.includeNames === true && options.sex === 'male') {
      categorized[animal.location] = maleAnimals;
    } else if ( options.includeNames === true && options.sorted === true) {
      categorized[animal.location] = orderedAnimals;
    } else if ( options.includeNames === true) {
      categorized[animal.location] = animalsNameInRegion;
    }
    return categorized;
  }, {});
  return animalReportByRegion;
}