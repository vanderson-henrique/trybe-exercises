const express = require('express');
const bodyParser = require('body-parser');
const routerProducts = require('./controllers/productController');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', routerProducts);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});

const express = require('express');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});