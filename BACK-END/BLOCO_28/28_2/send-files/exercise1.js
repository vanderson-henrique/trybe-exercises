const axios = require('axios');

const body = {
  conteudo: 'meu texto'
};

axios
  .post('http://localhost:3000/uploads/write', body)
  .then(response => console.log(response.status))
  .catch((error) => console.log(error));
