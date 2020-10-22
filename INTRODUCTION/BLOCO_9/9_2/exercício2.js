// Agora, um passo para trás: vamos fazer, passo a passo, uma Promise. Primeiramente, instancie uma Promise. Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.
const operationsWithNumbers = ()  => {
    return new Promise((resolve, reject) => {
    const arrayNumber = [];
    for (let i = 0; i < 10; i += 1) {
        arrayNumber.push(Math.floor(Math.random() * 50));
    }
    const squaredNumber = arrayNumber.map(number => number * number);
    const sumSquaredNumber = squaredNumber.reduce((sum, number) => sum += number, 0);
    
    if (sumSquaredNumber < 8000) {
      resolve(sumSquaredNumber);
    }
    reject(sumSquaredNumber);
});
};

operationsWithNumbers()
  .then(number => console.log(`Sucesso!! O número ${number} é menor que 8000!`))
  .catch(number => console.log(`Erro: o número ${number} é maior que 8000!`));
