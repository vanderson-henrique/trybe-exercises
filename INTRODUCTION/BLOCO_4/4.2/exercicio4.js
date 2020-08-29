/*Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: 
"valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somaNumbers = 0;

for (let i = 0; i < numbers.length; i += 1){
    somaNumbers += numbers[i];
}

let mediaNumbers = somaNumbers / numbers.length;

if (mediaNumbers > 20){
    console.log(`Valor maior que 20.`)
}
else {
    console.log(`Valor menor ou igual a 20.`);
}