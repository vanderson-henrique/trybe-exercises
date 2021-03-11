// Exercício 11: Produza três querys para o filme Batman :
/* Adicione o campo actor , que deve ser um array com o valor Christian Bale , 
ao array de cast em que o campo character seja igual a Batman ;*/

db.movies.updateOne(
  { title: "Batman" },
  {
    $set: {
      "cast.$[elemento].actor": ["Christian Bale"]
    }
  },
  { arrayFilters: [{ "elemento.character": "Batman" }] }
);


/* Adicione o campo actor , que deve ser um array com o valor Michael Caine , 
ao array de cast em que o campo character seja igual a Alfred ;*/

db.movies.updateOne(
  { title: "Batman" },
  {
    $set: {
      "cast.$[elemento].actor": ["Michael Caine"]
    }
  },
  { arrayFilters: [{ "elemento.character": "Alfred" }] }
);


/* Adicione o campo actor , que deve ser um array com o valor Heath Ledger , 
ao array de cast em que o campo character seja igual a Coringa .*/

db.movies.updateOne(
  { title: "Batman" },
  {
    $set: {
      "cast.$[elemento].actor": ["Heath Ledger"]
    }
  },
  { arrayFilters: [{ "elemento.character": "Coringa" }] }
);
