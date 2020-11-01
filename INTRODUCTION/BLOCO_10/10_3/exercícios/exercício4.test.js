/*Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las. */

let {
  stringToUpperCase,
  stringFirstLetter,
  concatString,
} = require("./exercício4");
jest.mock("./exercício4");

describe("Mockando várias funções de um arquivo", () => {
  test("Alterando a implementação da função stringToUpperCase para caixa baixa", () => {
    stringToUpperCase.mockImplementation((word) => word.toLowerCase());

    expect(stringToUpperCase("TRYBE")).toBe("trybe");
  });

  test("Alterando a implementação da função stringFirstLetter para retornar a última letra", () => {
    stringFirstLetter.mockImplementation((word) => word[word.length - 1]);

    expect(stringFirstLetter("Trybe")).toBe("e");
  });

  test("Alterando a implementação da função concatString para concatenar 3 strings", () => {
    concatString.mockImplementation((w1, w2, w3) => w1 + w2 + w3);

    expect(concatString('a','b','c')).toBe('abc');

  });
});
