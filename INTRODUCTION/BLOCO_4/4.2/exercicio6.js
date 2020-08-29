/*Descubra quantos valores ímpares existem no array e imprima o resultado. 
Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let valoresImpares = 0;

for (let i = 0; i < numbers.length; i += 1){
    if (numbers[i] % 2 != 0){ // verifica se o resto da divisão por 2 do conteúdo do array naquela posição é diferente de 0.
        valoresImpares += 1; // Caso seja, isso significa que é um número ímpar, e incrementa 1 na variável que conta a quantidade de números ímpares.
    }
}

if (valoresImpares > 0){
    console.log(`Existem ${valoresImpares} números ímpares no array numbers.`)
}
else {
    console.log(`Nenhum valor ímpar encontrado.`);
}