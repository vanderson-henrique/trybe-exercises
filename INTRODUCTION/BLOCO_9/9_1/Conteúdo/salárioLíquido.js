let salarioBruto = 2000;
let salarioLiquido;

function getSalario(salarioBruto, callback)
{
    let liquido = 0;
    const inss = salarioBruto * 0.11;
    const vr = salarioBruto * 0.05;
    const vt = salarioBruto * 0.06;
    const fgts = salarioBruto * 0.15;
    const descontos = inss + vr + vt + fgts;
    liquido = salarioBruto - descontos;
    
    return callback(liquido);
}

getSalario(salarioBruto, (resultado) => {
    const bonus = 350;
    salarioLiquido = resultado + bonus;
    console.log(`O salário liquido é ${salarioLiquido}`);
});