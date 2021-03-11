/* Exercício 12: Adicione aos atores de cast do character Batman do filme Batman os valores 
"Michael Keaton" , "Val Kilmer" e "George Clooney", e deixe o array em ordem alfabética. */

db.movies.updateOne(
  { title: "Batman" },
  {
    $push: {
      "cast.$[elemento].actor": {
        $each: ["Michael Keaton", "Val Kilmer", "George Clooney"]
      }
    }
  },
  { arrayFilters: [{ "elemento.character": "Batman" }] },
  { sort: { "cast.2.actor": 1 } }
);
