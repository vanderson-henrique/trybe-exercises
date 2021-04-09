const axios = require('axios');

// Fazer uma requisição do tipo GET

axios
  .get('http://localhost:3000/ping/')
  .then((response) => {
    console.log(response.data); // recebe Pong como resposta dessa requisição
    console.log(response.status); // recebe 200 como status dessa requisição
  })
  .catch((error) => {
    console.log(error);
  });

  // Esta forma envia parametros para a requisição
//   axios.get('/user', {
//     params: {
//       ID: 12345
//     }
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .then(() => {
//     // sempre executa no final, independente do que aconteça
//   });


// Forma usando async/await

// // Você pode usar métodos async também
// const getUser = async () => {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

// Requisição do tipo POST mandando um body junto

// const body = {
//   firstName: 'Fred',
//   lastName: 'Flintstone'
// };

// axios.post('/user', body)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });