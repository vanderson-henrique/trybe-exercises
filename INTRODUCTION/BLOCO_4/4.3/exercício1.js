/*1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, 
seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
n = 5

*****
*****
*****
*****
*****
*/

let n = 5;
let asterisco = "";  // crio a variável que vai armazenar o *
for (let i = 1; i <= n; i += 1){ // loop para que possa adicionar um * de acordo com o número de n
        asterisco += "*"; // está adicionando na variável um * cada vez que entra no loop, ou seja vai ficar com o valor de n
    }
    
for (let j = 1; j <= n; j += 1){ // loop para imprimir a minha variável que já tem a linha do tamanho certo o número de vezes de acordo com o valor de n
        console.log(asterisco);
}    
    
    


