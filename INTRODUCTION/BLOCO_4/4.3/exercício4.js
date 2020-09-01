/*4- Depois, faça uma pirâmide com n asteriscos de base:
n = 5

  *
 ***
*****
 */

 let n = 5;
 let asterisco = "";

 for (let i = 1; i <= n; i += 1){
      let espaço = "";
      asterisco += "*";
      for (let j = (n - i)/2; j >= 1; j -= 1){ // o numero total de caracteres em cada linha é o valor de n. sendo que os espaços são definidos pelo que sobra em relação aos asteriscos. Ex.: na primeira linha tem 1 asterisco e 4 espaços. Na terceira linha tem 3 asteriscos e 2 espaços. Estes espaços serão divididos igualmente em cada um dos lados dos asteriscos.
          espaço += " ";      
    }
    if (i % 2 == 1){ // apenas exibir as linhas impares de asterísco para formar a pirâmide.
      console.log(espaço + asterisco + espaço); // como eu defini o que teria de espaço em cada lado, coloquei concatenando espaço asterisco espaço.
    }
 }