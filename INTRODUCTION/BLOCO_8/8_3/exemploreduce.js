const numbers = [1, 2, 4, 5, 6, 7, 8, 9, 99, 778];

const somaNumbers = () => {
   return numbers.reduce((acumulador, valorArray) => acumulador + valorArray, 0);
    //return soma;
    }


console.log(somaNumbers());