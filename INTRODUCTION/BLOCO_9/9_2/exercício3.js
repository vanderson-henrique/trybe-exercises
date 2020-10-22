// Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.

const promise = new Promise((resolve, reject) => {
    const arrayNumber = [];
    for (let i = 0; i < 10; i += 1) {
        arrayNumber.push(Math.floor(Math.random() * 50));
    }
    const squaredNumber = arrayNumber.map(number => number * number);
    const sumSquaredNumber = squaredNumber.reduce((sum, number) => sum += number, 0);
    
    if (sumSquaredNumber < 8000) {
        return resolve(sumSquaredNumber);
    }
    reject(sumSquaredNumber);
})
.then(number => console.log(numberDivisions(number)))
.catch(number => console.log(`Erro: o número ${number} é maior que 8000!`));

const numberDivisions = (number) => {
    const arrayDivisors = [2, 3, 5, 10];
    const arrayDivisions = arrayDivisors.map(divisor => Math.floor(number / divisor));
    return arrayDivisions;
}
