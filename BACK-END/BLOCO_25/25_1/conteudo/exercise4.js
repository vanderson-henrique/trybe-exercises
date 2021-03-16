// Selecione todos os clientes com as suas respectivas transações feitas;

db.clients.aggregate(
  [
    { $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "from",
      as: "transactions_data"
    }}
  ]
);
