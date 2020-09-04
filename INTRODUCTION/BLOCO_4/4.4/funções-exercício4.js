/*Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres. */

function maiorNome(nomes){
    let maiorSize = 0;
    for (let i in nomes){
        if (nomes[maiorSize].length < nomes[i].length){
            maiorSize = i;
        }
    }
    console.log(nomes[maiorSize]);


}
maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Vanderson']);



