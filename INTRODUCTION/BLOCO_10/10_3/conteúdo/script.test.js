let { randomRgbColor } = require("./script");

// Funções simuladas (jest.fn(), jest.mock(), jest.spyOn());
/* Funções que só funcionam em funções simuladas:
    - toHaveBeenCalled() - verifica se a função no expect foi chamada
    - mockReturnValue(value) - define um valor padrão de retorno (só se torna um padrão depois 
        que todos os once são executados)
    - mockReturnValueOnce(value) - define um valor de retorno apenas uma vez (se sobrepõe)
    - toHaveBeenCalledTimes(number) - testa quantas vezes a função foi chamada
*/

test("#randomRgbColor", () => {
  // definindo a função como simulação e colocando um valor padrão de retorno pra ela
  randomRgbColor = jest.fn().mockReturnValue("rgb(255, 255, 255)");
  // chamando a função
  randomRgbColor();
  // testando se a função foi chamada
  expect(randomRgbColor).toHaveBeenCalled();
  // verificando se ela quando chamada retorna o que foi definido
  expect(randomRgbColor()).toBe("rgb(255, 255, 255)");
});

test("#randomRgbColor2", () => {
  randomRgbColor = jest
    .fn()
    .mockReturnValue("default value")
    .mockReturnValueOnce("first call")
    .mockReturnValueOnce("second call");

  expect(randomRgbColor).toHaveBeenCalledTimes(0);

  expect(randomRgbColor()).toBe("first call");
  expect(randomRgbColor).toHaveBeenCalledTimes(1);

  expect(randomRgbColor()).toBe("second call");
  expect(randomRgbColor).toHaveBeenCalledTimes(2);

  expect(randomRgbColor()).toBe("default value");
  expect(randomRgbColor).toHaveBeenCalledTimes(3);
});
