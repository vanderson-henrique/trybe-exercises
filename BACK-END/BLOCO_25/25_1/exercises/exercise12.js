/* Exercício 12 : Descubra quais as três uf s que mais compraram no ano de 2020 . 
Retorne os documentos no seguinte formato:

{
  "totalVendas": 10,
  "uf": "SP"
}

*/

db.vendas.aggregate(
  [
    {
      $match: {
        dataVenda: { $gte: ISODate("2020-01-01"), $lte: ISODate("2020-12-31") }
      }
    },
    {
      $lookup: {
        from: "clientes",
        let: { totalVendas: "$valorTotal", cliente: "$clienteId" },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$clienteId", "$$cliente"]
              }
            }
          },
          { $project: { "endereco.uf": 1, _id: 0 } }
        ],
        as: "vendas_clientes"
      }
    },
    {
      $unwind: "$vendas_clientes"
    },
    {
      $group: {
        _id: "$vendas_clientes.endereco.uf",
        totalVendasPorEstado: {
          $sum: 1
        }
      }
    },
    {
      $sort: { totalVendasPorEstado: -1 }
    },
    {
      $limit: 3
    },
    {
      $project: {
        _id: 0,
        "totalVendas": "$totalVendasPorEstado",
        "uf": "$_id"
      }
    }
  ]
);
