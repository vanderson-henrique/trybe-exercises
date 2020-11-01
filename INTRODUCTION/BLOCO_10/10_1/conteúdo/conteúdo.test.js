const { TestScheduler } = require("jest");
const sum = require("./conteúdo");

/*test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});

test('testa o número 5', () => {
  expect(5).toBe('5');
}); */

// Testes de igualdade em arrays e objetos

/* test('array and object equality', () => {
  const arr = [1, 2 ,3];
  const obj = { a: 1, b: 2, c: 3};

  expect(arr).toBe([1, 2, 3]); // fails
  expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
  expect(arr).toEqual([1, 2, 3]); // OK
  expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
});

*/

// Booleanos
/*
describe("Testes com Booleanos", () => {
  test("null", () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  test("zero", () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });
});
*/
// Números
/*
describe("Testes com Números", () => {
  test("dois mais dois", () => {
    const value = 2 + 2;
    // maior que...
    expect(value).toBeGreaterThan(3);
    // maior ou igual a...
    expect(value).toBeGreaterThanOrEqual(3.5);
    // menor que...
    expect(value).toBeLessThan(5);
    // menor ou igual a...
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe e toEqual são equivalentes para números
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  // Para igualdade de ponto flutuante, use toBeCloseTo em vez de toEqual, porque você não quer um teste dependa de um pequeno erro de arredondamento.

  test("adicionando números de ponto flutuante", () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);     Isso não vai funcionar por causa de um erro de arredondamento
    expect(value).toBeCloseTo(0.3); // Isso funciona.
  });
});
*/
// STRING

/*describe('an essay on the best flavor', () => {
  test('mentions grapefruit', () => {
    expect(essayOnTheBestFlavor()).toMatch(/grapefruit/);
    expect(essayOnTheBestFlavor()).toMatch(new RegExp('grapefruit'));
  });
});

// Este "matcher" também aceita uma string, a qual tentará corresponder:

describe('grapefruits are healthy', () => {
  test('grapefruits are a fruit', () => {
    expect('grapefruits').toMatch('grape');
  });
});*/

// ARRAYS

/*
describe("Testes de Arrays", () => {
  test("testa arrays", () => {
    expect([1, 2, 3, 4, 5]).toContain(3); // ok porque 3 está contido no array
  });

  test("testa arrays falha", () => {
    expect([1, 2, 3, 4, 5]).toContain(6); // falha, porque 6 não está contido no array
  });

  test("testa string", () => {
    expect("Vanderson").toContain("Vander"); // ok
  });

  test("testa string", () => {
    expect("Vanderson").toContain("vander"); // falha por causa da letra minúscula
  });

  test("testa length", () => {
    expect([1, 2, 3, 4, 5]).toHaveLength(5); // ok porque o tamanho do array é 5
  });

  test("testa length de string", () => {
    expect("Vanderson").toHaveLength(9); // ok porque o tamanho da string é 9
  });
});
*/

// OBJETOS

/*const studant = {
  name: 'Vanderson',
  age: 27,
  favoriteColor: 'azul'
};

describe('Testes de Objetos', () => {
test('testando objetos', () => {
  expect(studant).toHaveProperty('name'); // ok porque existe esta propriedade no objeto (deve estar entre aspas)
})

test('testando objetos', () => {
  expect(studant).toHaveProperty('age',26); // falha, porque o age não possui esse valor
});
});*/
