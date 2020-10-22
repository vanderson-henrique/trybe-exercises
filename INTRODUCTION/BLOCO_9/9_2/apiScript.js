const h2Joke = document.getElementById('jokeContainer');
const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = () => {
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => h2Joke.innerHTML = data.joke);

  
};

window.onload = () => fetchJoke();




