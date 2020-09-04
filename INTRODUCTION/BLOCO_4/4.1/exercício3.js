/*Faça um programa que retorne o maior de três números. Defina no começo do programa três 
variáveis com os valores que serão comparados.*/

let a = 12;
let b = 12.1;
let c = 12;

if (a > b && a > c) {
    console.log(a);
}
else if (b > c) {
    console.log(b);
}
else {
    console.log(c);
}