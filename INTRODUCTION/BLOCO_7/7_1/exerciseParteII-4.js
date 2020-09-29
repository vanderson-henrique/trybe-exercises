const skills = ['JavaScript', 'HTML', 'CSS', 'ArrowFunctions', 'FlexBox'];
const phrase = 'Trybe x aqui!';
const exchangeWord = word => phrase.replace('x', word);

skills.sort();

const mainSkills = fun1 => {
    let result = `${fun1} Minhas cinco principais habilidades são:`;
    skills.forEach((skill, index, array) => 
        result = `${result}
        * ${skill} na posição ${index + 1} entre ${array.length} habilidades.`);
    
    return result;
}

console.log(mainSkills(`${exchangeWord('Vanderson')}`));