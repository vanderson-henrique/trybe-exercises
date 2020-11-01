const { subtrair } = require('./mockando_modulos');
const math = require('./mockando_modulos')


//Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.

test('Teste da função subtrair com spyOn', () => {

    expect(math.subtrair(5,1)).toBe(4);

    const mockSubtrair = jest.spyOn(math, 'subtrair')
        .mockReturnValue(20);

    math.subtrair(5,1);
    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair()).toBe(20);
    expect(mockSubtrair).toHaveBeenCalledTimes(2);

    math.subtrair.mockRestore();
    expect(math.subtrair(5,1)).toBe(4);  
  });