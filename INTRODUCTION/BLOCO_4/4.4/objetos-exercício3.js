// Faça um for/in que mostre todas as chaves do objeto.


let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

info['recorrente'] = "Sim";

for (let chave in info){ //Para objetos é a chave que fica antes do in, e o nome do objeto depois.
    console.log(chave);
}