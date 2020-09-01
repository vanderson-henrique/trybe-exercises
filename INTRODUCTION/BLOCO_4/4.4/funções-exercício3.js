function menorIndice (array){
    let valorMenor = 0;

    for (let i in array){
        if (array[valorMenor] > array[i]){
            valorMenor = i;
        }
    }
    console.log(valorMenor);
}

menorIndice([2, 4, 6, -7, 10, 0, -3]);