const { test, expect } = require("@jest/globals");
/*6.1. Adicione uma funcionalidade para buscar pelo nome do animal - 
crie uma função que deverá passar no teste abaixo. 

6.2. Adicione uma nova funcionalidade para buscar pela idade dos animais. O retorno deve ser um 
array de objetos, mas, caso não ache nenhum, retorne uma mensagem de erro. Escreva tanto a função 
como o seu teste.
*/

const { findAnimalByName, getAnimal, getAnimalByAge } = require("./exercício6");

describe("Testando promise - findAnimalByName", () => {
  describe("Quando existe o animal com o nome procurado", () => {
    test("Retorne o objeto do animal", () => {
      expect.assertions(1);
      return getAnimal("Dorminhoco").then((animal) => {
        expect(animal).toEqual({ name: "Dorminhoco", age: 1, type: "Dog" });
      });
    });
  });

  describe("Quando não existe o animal com o nome procurado", () => {
    test("Retorna um erro", () => {
      expect.assertions(1);
      return getAnimal("Bob").catch((error) =>
        expect(error).toEqual("Nenhum animal com esse nome!")
      );
    });
  });
});

describe("Testando a promise - getAnimalByAge", () => {
  describe("Quando existe o animal pela idade pesquisada", () => {
    test("Retorna o animal", async () => {
      const animal = await getAnimalByAge(5);
      expect(animal).toEqual({ name: "Preguiça", age: 5, type: "Cat" });
    });
  });

  describe("Quando não existe o animal com a idade pesquisada", () => {
    test("Retorna um erro", () => {
      return expect(getAnimalByAge(3)).rejects.toEqual(
        "Não existe animal com esta idade!"
      );
    });
  });
});
