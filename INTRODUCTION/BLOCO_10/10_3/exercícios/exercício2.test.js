/*Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários. */

let randomNumber = require('./exercício1');

describe('Alterando implementação apenas uma vez', () => {
    test('Recebe 2 números e retorna a divisão entre eles, apenas uma vez', () => {

        randomNumber = jest.fn()
            .mockImplementationOnce((a, b) => a / b);
        
        expect(randomNumber(4,2)).toBe(2);
        expect(randomNumber(4,2)).not.toBe(2);
    });
});