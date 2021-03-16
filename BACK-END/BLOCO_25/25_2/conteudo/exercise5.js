// Retorne o maior número inteiro relativo ao lucro total sobre cada produto.

db.products.aggregate(
  [
    {
      $project: {
        _id: 0,
        name: 1,
        lucro_total: {
          $ceil: {
            $subtract: [
              "$sale_price",
              { $add: ["$purchase_price", "$taxes"] }
            ]
          }
        }
      }
    }
  ]
);