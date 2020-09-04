// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.


function maiorIndice (array){
    let indiceMaior = 0;
    for (let indice in array){
        if (array[indiceMaior] < array[indice]){
            indiceMaior = indice;
        }

    }
    console.log(indiceMaior);
    }
    
    maiorIndice([2, 3, 6, 7, 10, 1]);
    


    