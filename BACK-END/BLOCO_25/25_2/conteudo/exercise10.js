// Calcule o valor total do estoque, considerando que cada produto valha o mesmo que seu preço de venda. 
// Lembre-se da quantidade.

db.products.aggregate(
  [
    {
      $addFields: {
        totalEstoque: {
          $sum: [
            { $multiply: ["$sale_price", "$quantity"] }
          ]
        }
      }
    }
  ]
);
