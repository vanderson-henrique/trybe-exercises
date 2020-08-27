let valorCusto = 100;
let valorVenda = 150;

valorCusto = valorCusto + (valorCusto * 0.2);
let lucro = (valorVenda - valorCusto) * 1000;

if (valorCusto < 0 || valorVenda < 0){
    console.log("Valores incorretos!")
}
else {
    console.log("O lucro é: " + lucro);
}
