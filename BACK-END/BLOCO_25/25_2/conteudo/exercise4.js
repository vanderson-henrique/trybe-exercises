// Retorne o menor número inteiro relativo ao preço de venda de cada produto;

db.products.aggregate(
  [
    {
      $project: {
        _id: 0,
        name: 1,
        sale_price_rounded: {
          $floor: "$sale_price"
        }
      }
    }
  ]
);
