/*Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo.
Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. 
Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.*/


const angulo1 = 50;
const angulo2 = 100;
const angulo3 = 30;
let somaAngulosTriangulo = angulo1 + angulo2 + angulo3;

if (somaAngulosTriangulo == 180){
    console.log("true");
}
else {
    console.log("false");
}
