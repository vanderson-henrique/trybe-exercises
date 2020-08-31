/*5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n 
será sempre ímpar:
Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7

   *
  * *
 *   *
*******
 */


let n = 7;
let asterisco = "";

for (let i = 1; i <= n; i += 1){
     let espaço = "";
     asterisco += "*";
     for (let j = (n - i)/2; j >= 1; j -= 1){ 
         espaço += " ";
         let espaçoInterno = "";
         for (let k = (n - i - (j * 2)); k <= 1; k += 1){
            espaçoInterno = " ";
         }      
   }

   if (i % 2 == 1){ 
     console.log(espaço + asterisco + espaço); 
   }
}