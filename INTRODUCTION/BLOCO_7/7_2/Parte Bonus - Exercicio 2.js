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

// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const studentsLesson = (lesson, teacher) => {
    const keys = Object.keys(lesson);
    let count = 0;
    for (let i = 0; i < keys.length; i += 1) {
        if (lesson[keys[i]].professor === teacher) {
            count += lesson[keys[i]].numeroEstudantes;
        }
    }
    return count;
}

const arrayAulas = (lesson, teacher) => {
  let array = [];
  const keys = Object.keys(lesson);
  for (let i = 0; i < keys.length; i += 1) {
    if (lesson[keys[i]].professor === teacher) {
      array.push(lesson[keys[i]].materia);
    }
  }
  return array;
}

// cria o objeto e insere as chaves de acordo com os requisitos
// as chaves 'aulas' e 'estudantes' chamam funções para calcular o numero de alunos de acordo com o professor e o array com as aulas.
const report = {};
const createReport = (objetoLessons, teacher) => {
report.professor = teacher;
report.aulas = arrayAulas(objetoLessons, teacher);
report.estudantes = studentsLesson(objetoLessons, teacher);
return report;
}

console.log(createReport(allLessons, 'Maria Clara'));
//console.log(Object.keys(allLessons));