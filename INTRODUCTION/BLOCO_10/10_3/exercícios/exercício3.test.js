/*Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários. */

let randomNumber = require("./exercício1");

describe("Criando e resetando implementações com mock", () => {
  test("Recebe 3 parâmetros e retorna sua multiplicação, depois reseta e implementa outra", () => {
    randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(randomNumber(1, 2, 3)).toBe(6);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber(1, 1, 1)).toBe(1);
    expect(randomNumber).toHaveBeenCalledTimes(2);
    expect(randomNumber(0, 1, 1)).toBe(0);
    expect(randomNumber).toHaveBeenCalledTimes(3);

    randomNumber.mockReset().mockImplementation((number) => number * 2);

    expect(randomNumber(2)).toBe(4);
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber(0)).toBe(0);
    expect(randomNumber).toHaveBeenCalledTimes(2);
    expect(randomNumber(1)).toBe(2);
    expect(randomNumber).toHaveBeenCalledTimes(3);
  });
});
