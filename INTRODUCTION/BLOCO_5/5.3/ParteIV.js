var personName = "";

function complainMessage() {
  alert("Eu te disse para não fazer isso " + personName);
}

function typeAndScream() {
  document.getElementById("audio").play();
  personName = document.getElementById("name").value;
}

function goDark() {
  var body = document.getElementsByTagName("body")[0];
  if (body.className == "") {
    body.className = "dark";
  }
  else {
    body.className = "";
  } 
}

function finishTheStory() {
  document.getElementById("story").innerHTML = "Então procurei cuidadosamente na masmorra úmida. Aí está você! Eu sorri com todos os meus 98 dentes brilhantes. Hora do jantar!";
}
// Inserindo eventos
let button1 = document.querySelectorAll("button")[0];
button1.addEventListener("click", goDark);

let button2 = document.querySelectorAll('button')[1];
button2.addEventListener("click", complainMessage);

let button3 = document.querySelectorAll("button")[2];
button3.addEventListener("click", finishTheStory);

let text = document.querySelector(".textEntry");
text.addEventListener("input", typeAndScream);