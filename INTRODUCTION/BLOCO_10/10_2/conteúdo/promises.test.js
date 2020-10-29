const {findAnimalsByType, getListAnimals} = require('./scrpts');

/* Para se testar Promises:
  É necessário inserir um return antes da função e, em seguida, adicionar a quantidade 
  de expect esperadas por meio do comando expect.assertions(2).
  O .catch trabalha o resultado da promise quando ocorre um reject; já o .then, 
  quando ocorre o resolve.
  */

describe("Quando o tipo do animal existe", () => {
  test("Retorne a lista de animais", () => {
    expect.assertions(2);
    return getListAnimals("Dog").then((listDogs) => {
      expect(listDogs[0].name).toEqual("Dorminhoco");
      expect(listDogs[1].name).toEqual("Soneca");
    });
  });
});

describe("Quando o tipo do animal não existe", () => {
  test("Retorne um erro", () => {
    expect.assertions(1);
    return getListAnimals("Lion").catch((error) =>
      expect(error).toEqual({ error: "Não possui esse tipo de animal." })
    );
  });
});
