// Crie um índice do tipo text no campo description .

db.movies.createIndex({ description: "text" });
