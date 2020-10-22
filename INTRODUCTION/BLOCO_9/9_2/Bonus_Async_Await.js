// Refatore a Promise para utilizar somente async e await.

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
    reject('É mais de oito mil');
})
.then(number => numberDivisions(number))
.then(array => console.log(somaArray(array)))
.catch(msg => console.log(`${msg}! Essa promise deve estar quebrada!`));

// Função para dividir o array retornado por 2, 3, 5 e 10
const numberDivisions = (number) => {
    const arrayDivisors = [2, 3, 5, 10];
    const arrayDivisions = arrayDivisors.map(divisor => Math.floor(number / divisor));
    return arrayDivisions;
}

// Função para somar os números do array acima
const somaArray = (arrayNumber) => {
    return arrayNumber.reduce((sum, number) => {
        return sum += number;
    }, 0);
};