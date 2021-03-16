// Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.

db.clients.aggregate(
  [
    { $match: { State: "Florida" } },
    { $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "from",
      as: "transactions_data"
    }}
  ]
);

db.clients.aggregate(
  [
    { $lookup: {
      from: "transactions",
      let: { name_client: "$name", state_client: "$State" },
      pipeline: [
        { $match: { 
          $expr: {
            $and: [
              { $eq: ["$from", "$$name_client"] },
              { $eq: ["$$state_client", "Florida"]}
        ]
          }
             } }
      ],
      as: "transactions_data"
    }}
  ]
);
