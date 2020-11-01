/*Crie uma função que faça requisição para a api dog pictures. Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário. */
const fetch = require('node-fetch');

const fetchDogPictures = () => {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((object) => {
      if (object) {
        return console.log(Promise.resolve(object));
      }
      return console.log(Promise.reject(object));
    });
};

/*const imprimeFetch = async () => {
    const fecthPesquisada = await fetchDogPictures();
    console.log(fecthPesquisada);
}

imprimeFetch();*/

module.exports = { fetchDogPictures };
