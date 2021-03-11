/* Exercício 8: Crie um array de documentos chamado cast para o filme Home Alone com os 
seguintes dados:

{
  "actor": "Macaulay Culkin",
  "character": "Kevin"
},
{
  "actor": "Joe Pesci",
  "character": "Harry"
},
{
  "actor": "Daniel Stern"
} */

db.movies.updateOne(
  { title: "Home Alone" },
  {
    $push: {
      cast: {
        $each: [
          {
            "actor": "Macaulay Culkin",
            "character": "Kevin"
          },
          {
            "actor": "Joe Pesci",
            "character": "Harry"
          },
          {
            "actor": "Daniel Stern"
          }
        ]
      }
    }
  }
);
