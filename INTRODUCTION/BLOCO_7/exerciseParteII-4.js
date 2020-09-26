const skills = ['JavaScript', 'HTML', 'CSS', 'ArrowFunctions', 'FlexBox'];
const phrase = 'Trybe x aqui!';
const exchangeWord = word => phrase.replace('x', word);

skills.sort();

const mainSkills = fun1 => {
    let result = `${fun1} Minhas cinco principais habilidades são:`
    skills.forEach((skill, index) => 
        result = `${result}
        * ${skill}`);
    
    return result;
}

console.log(mainSkills(`${exchangeWord('Vanderson')}`));