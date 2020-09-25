// 2 - Crie uma função que receba uma frase e retorne qual a maior palavra.
// resolvendo com função normal
function longestWord (phase){
    const words = phase.split(' ');
    let biggestWord = " ";
    for (let index = 0; index < words.length; index += 1){
        if (words[index].length > biggestWord.length){
            biggestWord = words[index];
        }
    }
    return biggestWord;
}

// resolvendo com arrow function

const longestWordArrowFunction = phase => {
    const words = phase.split(' ');
    let biggestWord = " ";
    for (let index = 0; index < words.length; index += 1){
        if (words[index].length > biggestWord.length){
            biggestWord = words[index];
        }
    }
    return biggestWord;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
console.log(longestWordArrowFunction("Antônio foi no banheiro e não sabemos o que aconteceu"));