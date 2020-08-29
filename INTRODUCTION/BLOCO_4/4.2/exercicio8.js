/*Utilizando for, crie uma array que vá de 1 até 25 e imprima o resultado;*/
let numbers = [];
for (let i = 1; i <= 25; i += 1){ // entra no for até 25
    numbers.push(i); // insere no array o próprio índice, que vai de 1 a 25
}

console.log(`Estes são os números do array numbers: ${numbers}`);
