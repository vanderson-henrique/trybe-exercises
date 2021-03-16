// Arredondado para cima os resultados do exercício anterior

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