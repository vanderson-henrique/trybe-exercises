// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];

function maisRepetido(num){
    let contador = 0;
    let number = 0;

    for (let i = 0; i < num.length; i += 1){
        let number1 = num[i];
        let contadorRepeticoes = 0;

        for (let j = 0; j < num.length; j += 1){
            let number2 = num[j];
            if (number1 === number2){
                contadorRepeticoes += 1;
            }
        }

        if (contador < contadorRepeticoes){
            number = number1;
            contador = contadorRepeticoes;
        }
    }
    console.log(number);
        }

        maisRepetido([2, 3, 2, 5, 8, 5, 2]);

