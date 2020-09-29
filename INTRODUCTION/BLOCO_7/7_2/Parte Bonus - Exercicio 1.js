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

// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

//console.log(allLessons);
const studentsMath = (lesson) => {
    let count = 0;
    for (let i in lesson) {
        if (Object.values(lesson[i][i]) === 'Matemática') {
            count += 1;
        }
    }
    return count;
}

console.log(studentsMath(allLessons));