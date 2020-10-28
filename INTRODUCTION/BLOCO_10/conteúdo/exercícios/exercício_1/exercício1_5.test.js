const { TestScheduler } = require("jest");

const obj1 = {
  title: "My Title",
  description: "My Description",
};

const obj2 = {
  description: "My Description",
  title: "My Title",
};

const obj3 = {
  title: "My Different Title",
  description: "My Description",
};

// Compare dois objetos (JSON) para verificar se são idênticos ou não
describe("Comparando objetos JSON", () => {
  test("Teste 1 - Comparando Obj1 e obj2", () => {
    expect(obj1).toEqual(obj2);
  });

  test("Teste 2 - Comparando Obj1 e obj3", () => {
    expect(obj1).not.toEqual(obj3);
  });

  test("Teste 3 - Comparando Obj2 e obj3", () => {
    expect(obj2).not.toEqual(obj3);
  });
});
