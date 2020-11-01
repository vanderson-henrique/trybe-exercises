/* - mockImplementation - implementa uma nova função para aquele momento de teste como padrão
   - mockImplementationOnce - implementa uma nova função uma vez.
   - toHaveBeenCalledWith(...args) - valida quais parâmetros foram passados para a função
*/

const math = require('./math');
jest.mock("./math");

test("#somar", () => {
  // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});

test("#somar usando spyOn", () => {
    // testando se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
    const mockSomar = jest.spyOn(math, "somar");
  
    math.somar(1, 2);
    expect(mockSomar).toHaveBeenCalled();
    expect(mockSomar).toHaveBeenCalledTimes(1);
    expect(mockSomar).toHaveBeenCalledWith(1, 2);
    expect(mockSomar(1, 2)).toBe(3);
  });