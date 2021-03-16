// Selecione o valor total de transações;

db.transactions.aggregate(
  [
    { $group: {
      _id: null,
      total_transactions: {
        $sum: "$value"
      }
    }}
  ]
);
