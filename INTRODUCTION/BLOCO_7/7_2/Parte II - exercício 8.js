const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'manhã'
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const verifyPair = (lesson, key, value) => {
  const pairLessons = Object.entries(lesson);
    for (let i in pairLessons) {
      if (pairLessons[i][0] === key && pairLessons[i][1] === value) {
        return true;
      }
    }  
    return false;
}

console.log(verifyPair(lesson3, 'turno', 'noite')); // true
console.log(verifyPair(lesson3, 'materia', 'Maria Clara')); // false
