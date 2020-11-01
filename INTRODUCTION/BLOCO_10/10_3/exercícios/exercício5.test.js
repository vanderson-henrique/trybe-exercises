/*Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar. */

const changeString = require("./exercício4");

describe("Alterando e restaurando implementações", () => {
  test("Alterando a implementação para a função stringToUpperCase, e restaurando a original", () => {
    const mockUpperCase = jest
      .spyOn(changeString, "stringToUpperCase")
      .mockImplementation((word) => word.toLowerCase());

    expect(mockUpperCase("TRYBE")).toBe("trybe");

    changeString.stringToUpperCase.mockRestore();

    expect(changeString.stringToUpperCase("trybe")).toBe("TRYBE");
  });
});
