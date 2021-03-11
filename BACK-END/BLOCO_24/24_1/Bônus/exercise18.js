// Exercício 18 : Decremente em 100 o poder dos mutantes que não contêm a propriedade class.

db.xmen.updateMany(
  { class: { $exists: false } },
  {
    $currentDate: { lastUpdate: { $type: "timestamp" } },
    $inc: { power: -100 }
  }
);
