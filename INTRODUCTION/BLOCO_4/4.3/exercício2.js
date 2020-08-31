/*2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo 
com 5 asteriscos de base. Por exemplo: n = 5

*
**
***
****
*****
*/

let n = 5;
let asterisco = ""; // cria a variável que vai armazenar os *
for (let i = 1; i <= n; i += 1){ // loop para repetir o número de vezes de acordo com o valor de n.
    asterisco += "*"; // adiciona um * cada vez que o loop passa por aqui
    console.log(asterisco); // e logo em seguida imprime na tela, então cada rodada ele vai imprimir um a mais.
}