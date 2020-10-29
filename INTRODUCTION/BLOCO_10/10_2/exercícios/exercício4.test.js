const { test, expect } = require("@jest/globals");
const getRepos = require("./exercício4");
/*O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna 
uma lista como resultado. Dada a URL 'https://api.github.com/users/tryber/repos', faça um teste 
que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 
'sd-01-week4-5-project-meme-generator' se encontram nessa lista. */

// Obs. Como na lista não tinha os repo indicados, coloquei outros para teste

// Teste com .then
describe("Testa a promise getRepos de 3 formas", () => {
  test("Verifica se 2 repositórios se encontram na lista de retorno de uma consulta", () => {
    expect.assertions(2);
    return getRepos("https://api.github.com/users/tryber/repos").then(
      (arrayNames) => {
        expect(arrayNames).toContain("sd-00-block5-project-pixels-art");
        expect(arrayNames).toContain("nodejs-jwt-base-project");
      }
    );
  });

  // Teste com async/await
  test("Verifica se 2 repositórios com async/await", async (done) => {
    const arrayNames = await getRepos(
      "https://api.github.com/users/tryber/repos"
    );
    expect(arrayNames).toContain("sd-00-block5-project-pixels-art");
    expect(arrayNames).toContain("nodejs-jwt-base-project");
    done();
  });

  // Teste com resolves

  test("Verifica 2 repositórios com .resolves", () => {
    return expect(
      getRepos("https://api.github.com/users/tryber/repos")
    ).resolves.toContain("sd-00-block5-project-pixels-art");
  });
});
