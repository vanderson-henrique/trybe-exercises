/*Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos 
elementos por 2. */
let numbers = [];
for (let i = 1; i <= 25; i += 1){ // entra no for até 25
    numbers.push(i); // insere no array o próprio índice, que vai de 1 a 25
}

for (let j = 0; j < numbers.length; j += 1){ // entra no array criado anteriormente
    console.log(`A metade do valor da posição ${j} é: ${numbers[j] / 2}`) // imprime uma linha pra cada vez que entrar, com a metade do valor naquela posição.
}
