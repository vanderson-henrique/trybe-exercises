/*Instruções (leia tudo)
Agora, uma caixa de texto, dois quadrados e dois botões, as instruções são as seguintes:
Ao passar o mouse no botão, troque a cor da caixa correspondente para verde.
Ao clicar no botão, troque o texto da caixa correspondente para o que estiver escrito na caixa de texto.
Mostre um alerta quando o usuário colar alguma informação dentro da caixa de texto escrito: "Go Trybe!"
Altere apenas o JavaScript, criando todo o necessário para o event listener funcionar adequadamente.
*/

const caixaTexto = document.querySelector('.caixa-texto');
const caixaUm = document.querySelector(".caixa1");
const caixaDois = document.querySelector(".caixa2");
const botaoUm = document.querySelector(".botao1");
const botaoDois = document.querySelector(".botao2");

botaoUm.addEventListener("mouseover", function(){
  caixaUm.style.background = "green";
});
botaoDois.addEventListener("mouseover", function(){
  caixaDois.style.background = "green";
});

botaoUm.addEventListener("click", function(){
  caixaUm.innerText = caixaTexto.value;
})

botaoDois.addEventListener("click", function(){
  caixaDois.innerText = caixaTexto.value;
})

caixaTexto.addEventListener("paste", function(){
  alert("Go Trybe!");
})