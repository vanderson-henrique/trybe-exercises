// Exercício 9: Adicione o campo character com o valor Marv ao array de cast em que o campo actor
//  seja igual a Daniel Stern no filme Home Alone.

db.movies.updateOne(
  { title: "Home Alone" },
  {
    $set: {
      "cast.$[elemento].character": "Marv"
    }
  },
  { arrayFilters: [{ "elemento.actor": "Daniel Stern" }] }
);
