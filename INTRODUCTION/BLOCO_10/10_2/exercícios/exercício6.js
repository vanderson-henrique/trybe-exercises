/*6.1. Adicione uma funcionalidade para buscar pelo nome do animal - 
crie uma função que deverá passar no teste abaixo. 

6.2. Adicione uma nova funcionalidade para buscar pela idade dos animais. O retorno deve ser um 
array de objetos, mas, caso não ache nenhum, retorne uma mensagem de erro. Escreva tanto a função 
como o seu teste.
*/

const Animals = [
  { name: "Dorminhoco", age: 1, type: "Dog" },
  { name: "Soneca", age: 2, type: "Dog" },
  { name: "Preguiça", age: 5, type: "Cat" },
];

const findAnimalByName = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalFiltred = Animals.filter((animal) => animal.name === name);
      if (animalFiltred.length !== 0) {
        return resolve(animalFiltred[0]);
      }
      return reject("Nenhum animal com esse nome!");
    }, 2000);
  });
};

const getAnimal = (name) => findAnimalByName(name).then((animal) => animal);

const findAnimalByAge = (age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const animalAge = Animals.filter(animal => animal.age === age);
        if (animalAge.length !== 0) {
            return resolve(animalAge[0]);
        }
        return reject('Não existe animal com esta idade!');
    }, 2000);
  });
};

const getAnimalByAge = (age) => findAnimalByAge(age).then(animal => animal);

module.exports = { findAnimalByName, getAnimal, getAnimalByAge };
