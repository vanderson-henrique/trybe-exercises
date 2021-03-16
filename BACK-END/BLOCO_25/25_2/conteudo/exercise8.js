// Calcule qual será o lucro total de cada produto caso todo o estoque seja vendido.

db.products.aggregate(
  [
    {
      $project: {
        _id: 0,
        name: 1,
        lucroTotal: {
          $ceil: {
            $multiply: [
              "$quantity",
              {
                $subtract: [
                  "$sale_price",
                  {
                    $add: ["$purchase_price", "$taxes"]
                  }
                ]
              }
            ]
          }
        }
      }
    }
  ]
);
