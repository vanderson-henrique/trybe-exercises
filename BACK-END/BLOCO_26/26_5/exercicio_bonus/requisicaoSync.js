const axios = require('axios');

/*const getCharacters = async () => {
  const characters = await axios.get('https://swapi-trybe.herokuapp.com/api/people/?format=json');
  const { results } = characters.data;
  console.log('Personagens de Star Wars ------------------------');
  results.forEach((result, index) => {
    console.log(`${result.name} - Index no Array: ${index}`);
  });
}

getCharacters();*/

//Requisitos bônus

async function getAllCharacters() {
  const characters = await axios.get('https://swapi-trybe.herokuapp.com/api/people/?format=json');
  const { results } = characters.data;
  return results;
}

const run = async () => {
  const results = await getAllCharacters();
  console.log('Personagens de Star Wars ------------------------');
  results.forEach((result, index) => {
    console.log(`${result.name} - Index no Array: ${index}`);
  });
}

run();