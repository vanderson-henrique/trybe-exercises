const myFizzBuzz = require('./exercício1_4');

/*A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
1 - Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
2 - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
3 - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
4 - Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
5 - Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado*/

describe("Testes para a função myFizzBuzz", () => {
  test("Teste 1 - myFizzBuzz", () => {
    expect(myFizzBuzz(15)).toMatch("fizzbuzz");
  });

  test("Teste 2 - myFizzBuzz", () => {
    expect(myFizzBuzz(9)).toMatch("fizz");
  });

  test("Teste 3 - myFizzBuzz", () => {
    expect(myFizzBuzz(10)).toMatch("buzz");
  });

  test("Teste 4 - myFizzBuzz", () => {
    expect(myFizzBuzz("15")).toBeFalsy();
  });
});