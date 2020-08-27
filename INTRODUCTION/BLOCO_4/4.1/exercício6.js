/*Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas 
quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas 
(lower case).
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop -> diagonals*/

const peçaXadrez1 = "RAINHA";
let peçaXadrez = peçaXadrez1.toLowerCase();

switch(peçaXadrez){
    case "cavalo":
        console.log("Movimento em L e pode pular outras peças.");
        break;
    case "rei":
        console.log("Movimento em qualquer direção, uma casa por vez");
        break;
    case "rainha":
        console.log("Movimento em qualquer direção, várias casas por vez, mas não pode pular outras peças");
        break;
    case "torre":
        console.log("Movimento na vertical e horizontal e não pode pular outras peças.");
        break;
    case "bispo":
        console.log("Movimento diagonal e não pode pular outras peças.");
        break;
    case "peao":
        console.log("Muvimenta uma casa para frente.");
        break;

}