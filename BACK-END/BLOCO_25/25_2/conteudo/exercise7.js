// Calcule qual o valor total em estoque de cada produto, considerando o preço de venda e a quantidade;

db.products.aggregate(
  [
    {
      $project: {
        _id: 0,
        name: 1,
        valorTotalEmEstoque: {
          $multiply: ["$sale_price", "$quantity"]
        }
      }
    }
  ]
);
