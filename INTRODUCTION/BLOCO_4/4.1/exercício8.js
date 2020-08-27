/*Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo 
menos uma das três for par. Caso contrário, ele retorna false.
Bonus: use somente um if.*/

const num1 = 11;
const num2 = 55;
const num3 = 33;

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0){
    console.log("true");
}
else {
    console.log("false");
}