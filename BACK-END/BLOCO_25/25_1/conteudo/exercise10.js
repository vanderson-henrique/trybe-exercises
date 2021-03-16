// Selecione os bancos que têm o valor total de transações maior que 1000.

db.transactions.aggregate(
  [
    { $group: {
      _id: "$bank",
      total_transactions: {
        $sum: "$value"
      }
    }},
    { $match: { total_transactions: { $gt: 1000 } } }
  ]
);
