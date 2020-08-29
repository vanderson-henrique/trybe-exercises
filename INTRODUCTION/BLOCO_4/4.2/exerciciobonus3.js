/*Agora você irá criar um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo 
array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. 
Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor)
 e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 
 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, 
 a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado 
 deve ser o array abaixo: 
 [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
 */

 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 let novoNumbers = []; 
 for (let i = 1; i < numbers.length; i += 1){ //Sempre o "i" será o item a frente no array, ele começa na posição 1 para ser multiplicado pelo primeiro item "j".
     for (let j = i - 1; j < i ; j += 1){ // O j será a posição anterior.
        if (j < numbers.length){ // Enquanto o j for menor que o tamanho do array
            novoNumbers.push(numbers[i]*numbers[j]) // será inserido no novo array o resultado da multiplicação de i por j.
         }
     }
 }
 novoNumbers.push(numbers[numbers.length-1]*2) // No final, como o j não terá um valor para ser multiplicado, ele cai aqui e faz o cálculo para o ultimo valor do array por 2
 console.log(`Novo array: ${novoNumbers}`);
