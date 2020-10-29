// --- Instruções
// Dado um string, retorna verdadeiro se o string for um palíndromo
// ou falso se não for. Palíndromos são palavras que
// forma a mesma palavra se for invertida. * Inclua * espaços
// e pontuação para determinar se a string é um palíndromo.
// --- Exemplos:
// palíndromo ("abba") === verdadeiro
// palíndromo ("abcdefg") === falso

function palindrome(str) {
  let isPalindrome = "";
  for (let i = str.length - 1; i >= 0; i -= 1) {
    isPalindrome += str[i];
  }
  if (str === isPalindrome) return true;
  return false;
};

// console.log(palindrome(' aba'));

module.exports = palindrome;
