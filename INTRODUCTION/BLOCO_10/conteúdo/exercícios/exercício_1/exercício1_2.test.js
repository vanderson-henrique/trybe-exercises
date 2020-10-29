const myRemove = require("./exercício1_2");

/*A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
1 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
2 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
3 - Verifique se o array passado por parâmetro não sofreu alterações
4 - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado */

const myArray = [1, 2, 3, 4];

describe("Testes para a Função myRemove", () => {
  test("Teste 1 - myRemove", () => {
    expect(myRemove(myArray, 3)).toEqual([1, 2, 4]);
  });

  test("Teste 2 - myRemove", () => {
    expect(myRemove(myArray, 3)).not.toEqual([1, 2, 3, 4]);
  });

  test("Teste 3 - myRemove", () => {
    myRemove(myArray, 3);
    expect(myArray).toEqual([1, 2, 3, 4]);
  });

  test("Teste 4 - myRemove", () => {
    expect(myRemove(myArray, 5)).toEqual([1, 2, 3, 4]);
  });
});
