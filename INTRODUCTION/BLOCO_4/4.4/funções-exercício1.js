/*Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
Exemplo de palíndromo: arara.
verificaPalindrome("arara");
Retorno esperado: true
verificaPalindrome("desenvolvimento");
Retorno esperado: false */

function verificaPalindrome (palavra){
    let direito = [];
    let contrario = [];
    for (let i = 0; i < palavra.length; i += 1 )
        direito.push(palavra[i]);
  
    for (let i = palavra.length - 1; i >= 0; i -= 1){
        contrario.push(palavra[i]);
    }

    if ( direito === contrario){
        console.log(true);
    } else {
        console.log(false);
    }
} 

verificaPalindrome("arara");
