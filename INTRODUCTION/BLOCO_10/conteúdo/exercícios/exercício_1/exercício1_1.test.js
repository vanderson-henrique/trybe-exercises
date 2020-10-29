const { TestScheduler } = require("jest");
const sum = require("./exercício1_1");

/*A função sum(a, b) retorna a soma do parâmetro a com o b
Teste se o retorno de sum(4, 5) é 9
Teste se o retorno de sum(0, 0) é 0
Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)
Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")*/

describe("Testes Exercício 1 - Função sum", () => {
  test("Soma 4 e 5", () => {
    expect(sum(4, 5)).toBe(9);
  });

  test("Soma 0 e 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  test("Erro com string", () => {
    expect(() => {
      sum(4, "5");
    }).toThrow();
  });

  test("Mensagem de Erro", () => {
    expect(() => {
      sum(4, "5");
    }).toThrow("parameters must be numbers");
  });
});
