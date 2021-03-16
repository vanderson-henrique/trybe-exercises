// Calcule qual será o preço de venda de cada produto caso haja uma promoção de 50% de desconto.

db.products.aggregate(
  [
    {
      $project: {
        _id: 0,
        name: 1,
        precoComDesconto: {
          $divide: ["$sale_price", 2]
        }
      }
    }
  ]
);
