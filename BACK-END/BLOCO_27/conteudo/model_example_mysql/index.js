require('dotenv').config();
const express = require('express');

const Author = require('./controllers/Author');
const Books = require('./controllers/Books');

const app = express();

app.use(express.json());

app.get('/authors', Author.getAll);
app.get('/authors/:id', Author.findById);
app.post('/authors', Author.create);

app.get('/books', Books.getAll);
app.get('/books/:id', Books.findById);
app.post('/books', Books.create);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
