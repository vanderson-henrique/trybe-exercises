// Exercício 8 : Ainda nesse pipeline , descubra os 5 estados com mais compras.

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
    },
    {
      $addFields: {
        totalCompras: { $size: "$compras" }
      }
    },
    {
      $sort: { totalCompras: -1 }
    },
    {
      $limit: 10
    },
    { $unwind: "$compras" },
    {
      $addFields: {
        "compras.valorComDesconto": {
          $subtract: [
            "$compras.valorTotal",
            {
              $divide: [
                { $multiply: ["$compras.valorTotal", 10] },
                100
              ]
            }
          ]
        }
      }
    },
    {
      $group: {
        _id: "$endereco.uf",
        vendasPorEstado: {
          $sum: 1
        }
      }
    },
    {
      $sort: { vendasPorEstado: -1 }
    },
    {
      $limit: 5
    }
  ]
);
