/* Agora retorne os filmes que contenham action no array category e 
possuem nota do IMDB maior do que 7 . */

db.movies.find(
  { $and: [{ category: { $all: ["action"] } }, { imdbRating: { $gt: 7 } }] }
);
