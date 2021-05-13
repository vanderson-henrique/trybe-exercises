const express = require('express');
const bodyParser = require('body-parser');

const authorsRouter = require('./routes/authorsRouter');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(authorsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});