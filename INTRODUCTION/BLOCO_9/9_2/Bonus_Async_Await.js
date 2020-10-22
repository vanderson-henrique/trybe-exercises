// Refatore a Promise para utilizar somente async e await.

async function operationsWithNumbers() {
    const arrayNumber = [];
    for (let i = 0; i < 10; i += 1) {
        arrayNumber.push(Math.floor(Math.random() * 50));
    }
    const squaredNumber = arrayNumber.map(number => number * number);
    const sumSquaredNumber = squaredNumber.reduce((sum, number) => sum += number, 0);
    
    if (sumSquaredNumber < 8000) {
      return(sumSquaredNumber);
    }
    throw new Error('É mais de oito mil');
};

async function returnOperations() {
    try {
        const numberResponse = await operationsWithNumbers();
        const numberDivididos = await numberDivisions(numberResponse);
        const arraySum = await somaArray(numberDivididos);
        console.log(arraySum);
    } catch (error) {
        console.log(`${error}! Essa promise deve estar quebrada!`);
    }
}

// Função para dividir o array retornado por 2, 3, 5 e 10
async function numberDivisions(number) {
    const arrayDivisors = [2, 3, 5, 10];
    const arrayDivisions = arrayDivisors.map(divisor => Math.floor(number / divisor));
    return arrayDivisions;
};

// Função para somar os números do array acima
async function somaArray(arrayNumber) {
    return arrayNumber.reduce((sum, number) => {
        return sum += number;
    }, 0);
};

returnOperations();