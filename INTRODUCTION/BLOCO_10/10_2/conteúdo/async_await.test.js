const {findAnimalsByType, getListAnimals} = require('./scrpts');

/* Usando o async/await é preciso armazenar o retorno de uma função assíncrona em uma variável
Esta função deve ter a palavra await antes dela para que o teste espere a conclusão da execução
da função antes de testar.
Também deve-se utilizar a palavra async antes do callback da função para dizer que ela também é
assíncrona. */

  test('Testando com async/await', async () => {
    const listDogs = await getListAnimals('Dog');
    expect(listDogs[0].name).toEqual('Dorminhoco');
    expect(listDogs[1].name).toEqual('Soneca');
  });

// Para tratar o erro com sync/await é preciso colocar dentro de um bloco try/catch.

  test('Testando com async/await, testando o reject', async () => {
    try {
      await getListAnimals('Lion');
    } catch (error) {
      expect(error).toEqual({ error: "Não possui esse tipo de animal." })
    }
  });