// Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 
for (let i = 1; i < numbers.length; i += 1){ // índice para o número a direita
    for (let j = 0; j < i; j += 1){   // índice para o número a esquerda
        if (numbers[i] < numbers[j]){  // verifica se o número da direita é menor que o da esquerda
            let menorPosition = numbers[i]; // Se for, armazena ele em uma variável
                                            // então faz a troca das posições
            numbers[i] = numbers[j]; // a posição mais a direita recebe o valor maior
            numbers[j] = menorPosition; // a posição mais a direita recebe o valor maior
        } // Se o valor da esquerda for menor, nada é feito, já que eles já estão na posição correta.
    }
}
console.log(`Números ordenados: ${numbers}`);  


// o loop retorna, mas não entra novamente no j, porque ele será igual ao valor de i e não atende ao
// requisito do for.
// então é feito a comparação entre o segundo e terceiro item do array, até que se atinja todos.
// Na segunda vez, o j tambem é validado com dois índices diferentes.