// Exercício 9 : Descubra o cliente que mais consumiu QUEIJO PRATO . Retorne um documento com a seguinte estrutura:

/*
{
  "nomeCliente": "NOME",
  "uf": "UF DO CLIENTE",
  "totalConsumido": 100
}
*/

db.vendas.aggregate(
  [
    {
      $match: {
        itens: {
          $elemMatch: { nome: { $eq: "QUEIJO PRATO" } }
        }
      }
    },
    {
      $unwind: "$itens"
    },
    {
      $match: {
        "itens.nome": "QUEIJO PRATO"
      }
    },
    { 
      $group: {
        _id: "$clienteId",
        totalCompras: {
          $sum: "$itens.quantidade"
        },
      },
    },
    {
      $sort: { totalCompras: -1 }
    },
    {
      $limit: 1
    },
    {
      $lookup: {
        from: "clientes",
        localField: "_id",
        foreignField: "clienteId",
        as: "dados_clientes"
      }
    },
    {
      $unwind: "$dados_clientes"
    },
    {
      $project: {
        _id: 0,
        nomeCliente: "$dados_clientes.nome",
        uf: "$dados_clientes.endereco.uf",
        totalConsumido: "$totalCompras"
      }
    }
  ],
);
