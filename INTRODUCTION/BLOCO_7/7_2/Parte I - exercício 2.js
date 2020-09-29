// Atualize a myDogpropriedade do nome do objeto. Vamos mudar o nome dela de "Coder" para "Happy Coder". Você pode usar a notação de ponto ou colchete.

// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = "Happy Coder";
console.log(myDog.name);
myDog['name'] = "New name for Coder";
console.log(myDog.name);
