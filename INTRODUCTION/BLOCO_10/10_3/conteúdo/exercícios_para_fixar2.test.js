let { somar, subtrair, multiplicar, dividir } = require("./mockando_modulos");
//jest.mock('./mockando_modulos');

test("Mock da funcão subtrair e teste sua chamada", () => {
  subtrair = jest.fn();
  subtrair();
  expect(subtrair).toHaveBeenCalled();
  expect(subtrair).toHaveBeenCalledTimes(1);
});

// Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.

test("Teste da função multilicar, retorno padrão 10", () => {
  multiplicar = jest.fn();
  multiplicar.mockReturnValue(10);

  multiplicar();
  expect(multiplicar).toHaveBeenCalled();
  expect(multiplicar).toHaveBeenCalledTimes(1);
  expect(multiplicar()).toBe(10);
});

// Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.

test('Teste da Função somar, implementando uma função e recebendo valores', () => {
    somar = jest.fn();
    somar.mockImplementation((a, b) => a + b);

    somar(3,4);
    expect(somar).toHaveBeenCalled();
    expect(somar(3,4)).toBe(7);
    expect(somar).toHaveBeenLastCalledWith(3,4);
});

// Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.

test('Mock da função Dividir', () => {

  dividir = jest.fn();

  dividir.mockReturnValue(15)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(5);

    dividir(3,5);
    expect(dividir).toHaveBeenCalled();
    expect(dividir).toHaveBeenCalledTimes(1);
    expect(dividir()).toBe(5);
    expect(dividir).toHaveBeenCalledTimes(2);
    expect(dividir(1,2)).toBe(15);
    expect(dividir).toHaveBeenCalledTimes(3);
    expect(dividir).toHaveBeenLastCalledWith(1,2);
    expect(dividir).toHaveBeenCalledTimes(3);
});

