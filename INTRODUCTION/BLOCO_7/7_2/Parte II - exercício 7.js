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

  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});


// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. 

const getValueByNumber = (lesson, key) => Object.values(lesson)[key];

console.log(getValueByNumber(lesson1, 0));

/* Minha forma de pensar...
const objetcSelected = Object.values(lesson);
  return objetcSelected[key];
  */
