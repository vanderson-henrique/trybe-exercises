let salarioBruto = 3000;
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
console.log("O seu salário líquido é:" + salarioLiquido);