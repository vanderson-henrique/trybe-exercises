/* Exercício 17 : Produza uma query onde os mutantes class gama 
passam a ter seu poder de 300 somente se seu poder for maior que 300 . */

db.xmen.updateMany(
  { class: "gama" },
  {
    $currentDate: { lastUpdate: { $type: "timestamp" } },
    $min: { power: 300 }
  }
);
