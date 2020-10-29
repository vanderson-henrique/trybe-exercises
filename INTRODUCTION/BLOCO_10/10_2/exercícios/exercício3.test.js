const { test, expect } = require("@jest/globals");
const { findUserById, getUserName } = require("./script");

/*Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.
Dica: Utilize o try/catch para o caso de erro. */

describe("Testa a promise getUserName usando async/await", () => {
  test("Testa se quando o ID existe, retorna o nome do usuário", async (done) => {
    const name = await getUserName(5);
    expect(name).toEqual("Paul");
    done();
  });

  test("Testa se quando o ID não existe, retorna um erro", async (done) => {
    try {
      await getUserName(3);
    } catch (error) {
      expect(error).toEqual({ error: "User with 3 not found." });
      done();
    }
  });
});