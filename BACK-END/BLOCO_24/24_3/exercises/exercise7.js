/* Retorne todos os filmes com ratings entre 100 e 105 , exibindo apenas os campos title e ratings . */

db.movies.find(
  { ratings: { $elemMatch: { $gt: 100, $lt: 105 } } },
  { title: 1, ratings: 1, _id: 0 }
);
