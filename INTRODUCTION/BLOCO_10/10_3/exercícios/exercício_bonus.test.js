let { fetchJoke } = require('./exercício_bonus');

const requestRequire = {
    'id': '7h3oGtrOfxc',
    'joke': 'Whiteboards ... are remarkable.',
    'status': 200
  };

  test('Testando requisição a fecthJoke com um retorno específico', () => {
      fetchJoke = jest.fn().mockResolvedValue(requestRequire);


      fetchJoke();
      expect(fetchJoke).toHaveBeenCalled();
      expect(fetchJoke).toHaveBeenCalledTimes(1);
      expect(fetchJoke()).resolves.toBe(requestRequire);
  })