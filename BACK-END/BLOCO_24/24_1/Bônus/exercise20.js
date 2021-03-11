/* Exercício 20 : Em apenas uma query, adicione o campo áreas com [ "outside" ] a todos os 
Junior Staff que não tenham o campo area definido. */

db.xmen.updateMany(
  { $and: [{ occupation: "Junior Staff" }, { area: { $exists: false } }] },
  { $set: { area: ["outside"] } }
);
