// Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Fazer a comparação de 2 em 2 números
for (let i = 1; i < numbers.length; i += 1){ // índice mais a direita
    for (let j = 0; j < i; j += 1){ // índice mais a esquerda
        if (numbers[i] > numbers[j]){ // verifica se o valor a direita é maior que o da esquerda
            let maiorPosition = numbers[i]; // se for, armazena ele em uma variável
                                            // depois é feita a troca de posições
            numbers[i] = numbers[j]; // a posição mais a direita recebe o valor menor (j)
            numbers[j] = maiorPosition; // e a posição mais a esquerda recebe o valor maior (j)
        }
    }
}
console.log(`Números em ordem decrescente: ${numbers}`);