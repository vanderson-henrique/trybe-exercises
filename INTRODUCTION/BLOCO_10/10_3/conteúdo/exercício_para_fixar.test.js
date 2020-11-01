let randomNumber = () => Math.floor(Math.random() * 100);

let isDivisible = (number) => (randomNumber() % number) === 0;


test('Verifica se a função randomNumber é chamada quando executa a função isDivisible', () => {

    randomNumber = jest.fn();

    isDivisible();
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
});

test('Se quando randomNumber retorna par e isDivisible recebe 2, retorna true', () => {

    randomNumber = jest.fn().mockReturnValue(10)
        .mockReturnValueOnce(3)
        .mockReturnValueOnce(2);

    expect(isDivisible(2)).toBeFalsy();
    expect(isDivisible(2)).toBeTruthy();
    expect(isDivisible(2)).toBeTruthy();
    expect(isDivisible(5)).toBeTruthy();
});


