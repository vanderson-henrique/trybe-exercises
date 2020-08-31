/*Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele 
com quaisquer outros números dá resto diferente de zero.
Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar 
de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar. */

let num = 7;
let divisores = 0;

for (let i = 1; i <= num; i += 1){ // percorre todos os números para verificar as divisões
    if (num % i == 0){ // verifica se a divisão é exata
        divisores += 1; // se for, armazena na variável
    }
}

if (divisores > 2){ // se houver mais de dois divisores, o número não é primo.
    console.log(`O número ${num} não é primo!`)
}
else {
    console.log(`O número ${num} é primo!`)
}