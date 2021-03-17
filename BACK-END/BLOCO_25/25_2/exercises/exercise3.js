// Exercício 3 : Remova os estágios $count e $match do exercício anterior 
// e adicione um estágio no pipeline que coloque as compras do cliente no campo compras.

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
      $lookup: {
        from: "vendas",
        localField: "clienteId",
        foreignField: "clienteId",
        as: "compras"
      }
    }
  ]
);