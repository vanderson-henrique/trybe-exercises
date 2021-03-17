// Exercício 2 : Utilizando o novo campo idade , conte quantos clientes têm entre 18 e 25 anos.

db.clientes.aggregate(
  [
    {
      $addFields: {
        idade: {
          $floor: {
            $divide: [
              { $subtract: [
                "$$NOW", "$dataNascimento"
              ]},
              {
                $multiply: [365, 86400000]
              }
            ]
          }
        }
      }
    },
    {
      $match: { idade: { $gte: 18, $lte: 25 } }
    },
    {
      $count: "total_clientes_entre_18_e_25_anos"
    }
  ]
);