const { test, expect } = require("@jest/globals");
const { findUserById, getUserName } = require("./script");

/*Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função getUserName 
para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é 
encontrado.
Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users, para saber 
quais IDs existem. */

describe("Testa a Promise getUsername", () => {
  test("Se existe o usuário consultado retorna o nome dele.", (done) => {
    expect.assertions(1);
    return getUserName(4).then((name) => {
      expect(name).toEqual("Mark");
      done();
    });
  });

  test("Se não existe o usuário consultado, retorna um erro", (done) => {
    expect.assertions(1);
    return getUserName(1).catch((error) => {
      expect(error).toEqual({ error: "User with 1 not found." });
      done();
    });
  });
});
