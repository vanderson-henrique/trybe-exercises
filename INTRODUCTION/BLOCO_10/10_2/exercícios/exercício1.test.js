/*Escreva um teste que verifique a chamada do callback de uma função uppercase, que 
transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os 
falso-positivos em testes assíncronos. */

const { test, expect } = require("@jest/globals");

const uppercase = (str, callback) => {
    callback(str.toUpperCase());
  }

  //uppercase('vanderson', (name) => name);

  test('Testa se a função uppercase transforma as letras em maiúsculas', done => {
    uppercase('vanderson', (word) => {
      expect(word).toMatch('VANDERSON');
      done();
    });
  });