/* Exercício 5 : Confira o número de documentos retornados pelo pipeline com o método itcount() . 
Até aqui, você deve ter 486 documentos sendo retornados. */

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
    },
    {
      $match: {
        compras: {
          $elemMatch: { dataVenda: { $gte: ISODate("2019-06-01"), $lte: ISODate("2020-03-31") } }
        }
      }
    }
  ]
).itcount();
