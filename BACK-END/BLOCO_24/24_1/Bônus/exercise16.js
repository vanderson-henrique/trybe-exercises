/* Exercício 16 : Produza uma query onde os mutantes class ômega ou gama passam 
a ter seu poder de 500 somente se seu poder for menor que 500. */

db.xmen.updateMany(
  { class: { $in: ["omega", "gama"] } },
  {
    $currentDate: { lastUpdate: { $type: "timestamp" } },
    $max: { power: 500 }
  }
);
