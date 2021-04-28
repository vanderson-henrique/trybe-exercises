const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');

const stream = fs.createReadStream('imagem.png');

const form = new FormData();
form.append('file', stream);
const formHeaders = form.getHeaders();

axios
  .post('http://localhost:3000/uploads', form, {
    headers: {
      ...formHeaders,
    },
  })
  .then((response) => console.log(response))
  .catch((error) => error);
