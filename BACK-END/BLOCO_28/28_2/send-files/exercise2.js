const axios = require('axios');

axios
  .post('http://localhost:3000/uploads/readFile/1617979391694.txt')
  .then((response) => {
    console.log(response.status);
    console.log(response.data);
  })
  .catch((error) => console.log(error));
