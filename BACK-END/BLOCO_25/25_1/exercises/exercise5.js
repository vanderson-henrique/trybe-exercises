// Exercício 5: Agrupe os clientes por sexo. Retorne o total de clientes de cada sexo no campo total.

db.clientes.aggregate(
  [
    { $group: {
      _id: "$sexo",
      count: { $sum: 1 }
    }}
  ]
);
