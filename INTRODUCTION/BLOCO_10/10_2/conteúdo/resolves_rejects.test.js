const {findAnimalsByType, getListAnimals} = require('./scrpts');
/*O .resolves espera a promise ser resolvida. Caso a promise seja rejeitada, o teste automaticamente irá falhar.
O .rejects espera a promise ser rejeitada. Caso a promise seja resolvida, o teste automaticamente irá falhar. */

// .resolves e .rejects com Promises
describe('Testando promise - findAnimalsByType', () => {
    describe('Quando o tipo do animal existe', () => {
      test('Retorne a lista de animais', () => {
        const listDogs = [
          { name: 'Dorminhoco', age: 1, type: 'Dog' },
          { name: 'Soneca', age: 2, type: 'Dog' },
        ]
        expect.assertions(1);
        return expect(getListAnimals('Dog')).resolves.toEqual(listDogs)
      });
    });
  
    describe('Quando o tipo de animal não existe', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return expect(getListAnimals('Lion')).rejects.toEqual({ error: 'Não possui esse tipo de animal.' })
      });
    });
  });

  // .resolves e .rejects com async/await

  describe('Testando Async/Await - findAnimalsByType', () => {
    describe('Quando o tipo do animal existe', () => {
      test('Retorne a lista de animais', async () => {
        const listDogs = [
          { name: 'Dorminhoco', age: 1, type: 'Dog' },
          { name: 'Soneca', age: 2, type: 'Dog' },
        ]
        expect.assertions(1);
        await expect(getListAnimals('Dog')).resolves.toEqual(listDogs)
      });
    });
  
    describe('Quando o tipo de animal não existe', () => {
      test('Retorna um erro', async () => {
        expect.assertions(1);
        await expect(getListAnimals('Lion')).rejects.toEqual({ error: 'Não possui esse tipo de animal.' })
      });
    });
  });