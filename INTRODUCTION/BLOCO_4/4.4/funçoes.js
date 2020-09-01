// Bloco 4.1 - Exercício 1
function operacoes(a,b) {
    // Adição
console.log(a+b);

// Subtração
console.log(a-b);

// Multiplicação
console.log(a*b);

// Divisão
console.log(a/b);

// Módulo - resto da divisão
console.log(a%b);
}


// Bloco 4.1 - Exercício 2
function maiorValor(a,b){
    if (a > b) {
        console.log(a);
    }
    else {
        console.log(b);
    }
}

// Bloco 4.1 - Exercício 3
function maiorDeTres (a,b,c){
    if (a > b && a > c) {
        console.log(a);
    }
    else if (b > c) {
        console.log(b);
    }
    else {
        console.log(c);
    }
}

// Bloco 4.1 - Exercício 4
function positivoNegativo(valor){
    if (valor > 0) {
        console.log("positive");
    }
    else if (valor < 0) {
        console.log("negative");
    }
    else 
        console.log("zero");
}

// Bloco 4.1 - Exercício 5
function triangulo(angulo1, angulo2, angulo3){
    let somaAngulosTriangulo = angulo1 + angulo2 + angulo3;

if (somaAngulosTriangulo == 180){
    console.log("true");
}
else {
    console.log("false");
}
}

// Bloco 4.1 - Exercício 6
function xadrez(peçaXadrez1){
    let peçaXadrez = peçaXadrez1.toLowerCase();

switch(peçaXadrez){
    case "cavalo":
        console.log("Movimento em L e pode pular outras peças.");
        break;
    case "rei":
        console.log("Movimento em qualquer direção, uma casa por vez");
        break;
    case "rainha":
        console.log("Movimento em qualquer direção, várias casas por vez, mas não pode pular outras peças");
        break;
    case "torre":
        console.log("Movimento na vertical e horizontal e não pode pular outras peças.");
        break;
    case "bispo":
        console.log("Movimento diagonal e não pode pular outras peças.");
        break;
    case "peao":
        console.log("Muvimenta uma casa para frente.");
        break;

}
}

// Bloco 4.1 - Exercício 7
function notaPorcentagem(nota){
    if (nota >= 90 && nota <=100){
        console.log("A");
    }
    else if (nota >= 80 && nota < 90){
        console.log("B");
    }
    else if (nota >= 70 && nota < 80){
        console.log("C");
    }
    else if (nota >= 60 && nota < 70){
        console.log("D");
    }
    else if (nota >= 50 && nota < 60){
        console.log("E");
    }
    else if (nota < 50 && nota > 0){
        console.log("F");
    }
    else{
        console.log("Nota inválida!!");
    }
}

// Bloco 4.1 - Exercício 8
function umaPar(num1, num2, num3){
    if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0){
        console.log("true");
    }
    else {
        console.log("false");
    }
}

// Bloco 4.1 - Exercício 9
function umaImpar(num1, num2, num3){
    if (num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0){
        console.log("true");
    }
    else {
        console.log("false");
    }
}

// Bloco 4.1 - Exercício 10
function lucro (valorCusto, valorVenda){
    valorCusto = valorCusto + (valorCusto * 0.2);
let lucro = (valorVenda - valorCusto) * 1000;

if (valorCusto < 0 || valorVenda < 0){
    console.log("Valores incorretos!")
}
else {
    console.log("O lucro é: " + lucro);
}
}

lucro(100, 150);

// Bloco 4.1 - Exercício 11
function salarioLiquido (salarioBruto){
    let salarioBase = null;
let descontoIRRF = null;

if (salarioBruto <= 1556.94){
    salarioBase = salarioBruto - (salarioBruto * 0.08);
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    salarioBase = salarioBruto - (salarioBruto * 0.09);
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    salarioBase = salarioBruto - (salarioBruto * 0.11);
}
else {
    salarioBase = salarioBruto - 570.88;
}


if (salarioBase < 1903.98){
    descontoIRRF = 0;
}

else if (salarioBase >= 1903.99 && salarioBase <= 2826.65){
    descontoIRRF = (0.075 * salarioBase) - 142.80;
}
else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
    descontoIRRF = (0.15 * salarioBase) - 354.80;
}
else if (salarioBase >= 3751.06 && salarioBase <= 4664.68){
    descontoIRRF = (0.225 * salarioBase) - 636.13;
}
else {
    descontoIRRF = (0.275 * salarioBase) - 636.13;
}

let salarioLiquido = salarioBase - descontoIRRF;
console.log("O seu salário líquido é: R$ " + salarioLiquido);
}


salarioLiquido(3500);
