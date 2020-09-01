/*5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n 
será sempre ímpar:
Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7

   *
  * *
 *   *
*******
 */


let n = 17;
let lineInput = [];
let baseMatrix = [];
let symbol = "*";
let matrix = [];
let left = 1;
let right = n - 2;

// resolvendo a base da matriz. Será uma base com o número de asteriscos igual a n
   for (let linhaColuna = 0; linhaColuna < n; linhaColuna += 1){
      baseMatrix[linhaColuna] = symbol;
   }
matrix[0] = baseMatrix; // colocando o array base dentro do array matrix

   for (lineIndex = 1; lineIndex < n; lineIndex +=1){
      for ( linhaColuna = 0; linhaColuna < n; linhaColuna += 1){
         if (linhaColuna === left || linhaColuna === right){
            lineInput[linhaColuna] = symbol;   
         }
         else {
            lineInput[linhaColuna] = " ";
         }
      }
      matrix[lineIndex] = lineInput;
      left += 1;
      right -= 1;
      lineInput = [];
      if (left > right){
         break;
      }
   }

   // convertendo array para string

   let result = "";

   for (lineIndex = matrix.length - 1; lineIndex >= 0; lineIndex -= 1){
      for (linhaColuna = 0; linhaColuna < n; linhaColuna += 1){
         result += matrix[lineIndex][linhaColuna];
      }
      console.log(result);
      result = "";
   }
