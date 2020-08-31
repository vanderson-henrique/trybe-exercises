/*3- Agora inverta o lado do triângulo. Por exemplo:
n = 5

    *
   **
  ***
 ****
*****
 */

 let n = 5;
 let asterisco = ""; // variável que irá armazenar o *

    for (let i = 1; i <= n; i += 1){ // loop para escrever todas as linhas de acordo com o valor de n
        let espaço = ""; // variável para armazenar o espaço. ela é reiciada toda vez que vai para a próxima linha
        asterisco += "*"; // em cada linha que passa, insere um *
        for (let j = n - i; j >= 1; j -= 1){ // loop para que adicione na variável espaço, o espaço em branco necessário.
                                             // de acordo com o número da linha que estamos.
                                             // Ex. na linha 2, haverá 3 espaços (5 (que é o valor de n) - 2 que é a linha que estamos)
                                             // na linha 4, haverá 1 espaço (5 -4 = 1);    
                espaço += " "; // armazena na variável a quantidade de espaços de acordo com a linha;
        
}
console.log(espaço + asterisco); // imprime nessa ordem na tela.
}

