/*Utilizando for, descubra qual o menor valor contido no array e imprima-o;*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorValor = numbers[0]; //Declarei que a variável menorValor recebe o primeiro valor do array, para iniciar as comparações.

for (let i = 0; i < numbers.length; i += 1){
    if (numbers[i] < menorValor){ // compara se o valor do conteúdo do array naquela posição é menor que o que tem dentro da variável de controle 
        menorValor = numbers[i]; // se for ele atribui o valor dela na variável menorValor. No final só ficará lá o menor valor
    }
}

console.log(`O menor valor do array numbers é: ${menorValor}`);