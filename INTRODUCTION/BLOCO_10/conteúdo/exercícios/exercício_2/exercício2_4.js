// --- Instruções
// Escreva uma função que retorna o número de vogais
// usado em uma string. As vogais são os caracteres 'a', 'e'
// 'i', 'o' e 'u'.
// --- Exemplos
// vogais ('Olá!') -> 3
// vogais ('Por que você pergunta?') -> 7
// vogais ('Por quê?') -> 3

function vowels(str) {
  const arrayVowels = ['a', 'e', 'i', 'o', 'u'];
  str = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (arrayVowels.find((vowel) => str[i] === vowel)) {
      count += 1;
    }
  }
  return count;
}

// console.log(vowels('abcdefghijklmnopqrstuvwxyz'));

module.exports = vowels;
