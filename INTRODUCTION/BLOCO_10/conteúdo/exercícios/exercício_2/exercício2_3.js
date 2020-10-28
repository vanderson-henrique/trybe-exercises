// --- Instruções
// Dado um inteiro, retorna um inteiro que é o inverso
// ordenação dos números.
// --- Exemplos
// reverseInt (15) === 51
// reverseInt (981) === 189
// reverseInt (500) === 5
// reverseInt (-15) === -51
// reverseInt (-90) === -9

function reverseInt(n) {
  const stringN = n.toString();
  let reverseNumber = "";
  for (let i = stringN.length - 1; i >= 0; i -= 1) {
    if (stringN.length > 1 && stringN[i] !== "0") {
      reverseNumber += stringN[i];
    } else {
      reverseNumber += stringN[i];
    }
  }
  if (reverseNumber[reverseNumber.length - 1] === "-") {
    return parseInt(reverseNumber) * -1;
  }
  return parseInt(reverseNumber);
}

// console.log(reverseInt(-100700));

module.exports = reverseInt;
