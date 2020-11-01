/*Crie uma função que faça requisição para a api dog pictures. Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário. */

let apiFetch = require("./exercício6");

describe("Mock em requisições à API Dog Pictures", () => {
  const api = jest.spyOn(apiFetch, "fetchDogPictures");
  afterEach(api.mockReset);

  test("Testando que a requisição se resolveu", async () => {
    api.mockResolvedValue("request sucess");

    api();
    expect(api).toHaveBeenCalled();
    expect(api).toHaveBeenCalledTimes(1);
    expect(api()).resolves.toBe("request sucess");
    expect(api).toHaveBeenCalledTimes(2);
  });

  test("Testando que a requisição não se resolveu", async () => {
    api.mockRejectedValue("request failed");

    api();
    expect(api).toHaveBeenCalled();
    expect(api).toHaveBeenCalledTimes(1);
    expect(api()).rejects.toBe("request failed");
    expect(api).toHaveBeenCalledTimes(2);
  });
});
