const myRemoveWithoutCopy = require("./exercício1_3");

/*A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
1 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
2 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
3 - Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
4 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado*/

const myArray = [1, 2, 3, 4];

describe("Testes para a função myRemoveWithoutCopy", () => {
  test("Teste 1 - myRemoveWithoutCopy", () => {
    expect(myRemoveWithoutCopy(myArray, 3)).toEqual([1, 2, 4]);
  });

  test("Teste 2 - myRemoveWithoutCopy", () => {
    expect(myRemoveWithoutCopy(myArray, 3)).not.toEqual([1, 2, 3, 4]);
  });

  test("Teste 3 - myRemoveWithoutCopy", () => {
    myRemoveWithoutCopy(myArray, 3);
    expect(myArray).not.toEqual([1, 2, 3, 4]);
  });

  test("Teste 4 - myRemoveWithoutCopy", () => {
    expect(myRemoveWithoutCopy(myArray, 5)).toEqual([1, 2, 4]);
  });
});