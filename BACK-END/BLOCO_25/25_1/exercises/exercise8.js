// Exercício 8 : Descubra quais são os 5 clientes que gastaram o maior valor.

db.vendas.aggregate(
  [
    { $match: { status: { $in: ["ENTREGUE", "EM SEPARACAO"] } } },
    {
      $group: {
        _id: "$clienteId",
        totalCompras: {
          $sum: "$valorTotal",
        }
      }
    },
    { $sort: { totalCompras: -1 } },
    { $limit: 5 }
  ]
);
