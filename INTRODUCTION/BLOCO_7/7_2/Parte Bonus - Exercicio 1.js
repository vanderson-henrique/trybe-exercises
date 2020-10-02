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
    numeroEstudantes: 50,
    professor: 'Maria Clara',
    turno: 'noite',
  };

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

//console.log(allLessons);
const studentsMath = (lesson) => {
    const keys = Object.keys(lesson);
    let count = 0;
    for (let i = 0; i < keys.length; i += 1) {
        if (lesson[keys[i]].materia === 'Matemática') {
            count += lesson[keys[i]].numeroEstudantes;
        }
    }
    return count;
}
console.log(studentsMath(allLessons));
//console.log(Object.keys(allLessons));