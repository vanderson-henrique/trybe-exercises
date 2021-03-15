/* Exercício 4: Conte quantos clientes do estado SC existem na coleção. 
Retorne um documento em que o campo _id contenha a UF e outro campo com o total.*/

// Primeiro agrupando e depois filtrando
db.clientes.aggregate(
  [
    { $group: {
      _id: "$endereco.uf",
      count: { $sum: 1 }
    }},
    { $match: { _id: "SC" } }
  ]
);

// Primeiro filtrando e depois agrupando
db.clientes.aggregate(
  [
    { $match: { "endereco.uf": "SC" } },
    { $group: {
      _id: "$endereco.uf",
      count: { $sum: 1 }
    }}
  ]
);