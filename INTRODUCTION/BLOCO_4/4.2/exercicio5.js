// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorValor = 0;

for (let i = 0; i < numbers.length; i += 1){
    if (numbers[i] > maiorValor){  // compara se o valor da minha variável é maior que a posição do array
        maiorValor = numbers[i];   // se for, ele atribui àquela variável o valor do conteúdo na posição
    }     // isso se repete até todos os números serem testados.
}

console.log(`O maior valor do array numbers é: ${maiorValor}`);