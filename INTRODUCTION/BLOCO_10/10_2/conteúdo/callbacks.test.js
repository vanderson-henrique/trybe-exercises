// Este teste falha porque ele não espera a função assíncrona terminar para executar.

/*test("Passa por falta do 'done'", () => {
    setTimeout(() => {
      expect(10).toBe(5);
      console.log('Deveria falhar!')
    }, 500);
  });

  test("Não deveria passar!", done => {
    setTimeout(() => {
      expect(10).toBe(5);
      console.log('Deveria falhar!')
      done();
    }, 500);
  });*/

  // Este teste funciona, mas é interessnte trocar os valores esperados para verificar se ele irá falhar

  /*const SumNumbers = (a, b, callback) => {
    setTimeout(() => {
      const result = a + b;
      callback(result);
    }, 500)
  }
  
  test('Testando SumNumbers, soma 5 mais 10', done => {
    SumNumbers(5, 10, (result) => {
      expect(result).toBe(15);
      done();
    });
  })*/

  

