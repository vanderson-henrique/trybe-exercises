// Quando a Promise for rejeitada, imprima, via console.log, a frase "É mais de oito mil! Essa promise deve estar quebrada!"
const operationsWithNumbers = ()  => {
    return new Promise((resolve, reject) => {
    const arrayNumber = [];
    for (let i = 0; i < 10; i += 1) {
        arrayNumber.push(Math.floor(Math.random() * 50));
    }
    const squaredNumber = arrayNumber.map(number => number * number);
    const sumSquaredNumber = squaredNumber.reduce((sum, number) => sum += number, 0);
    
    if (sumSquaredNumber < 8000) {
        return resolve(sumSquaredNumber);
    }
    reject("É mais de oito mil! Essa promise deve estar quebrada!");
});
}

operationsWithNumbers()
  .then(number => console.log(numberDivisions(number)))
  .catch(msg => console.log(msg));

const numberDivisions = (number) => {
    const arrayDivisors = [2, 3, 5, 10];
    const arrayDivisions = arrayDivisors.map(divisor => Math.floor(number / divisor));
    return arrayDivisions;
}
