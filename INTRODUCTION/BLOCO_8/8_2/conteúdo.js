const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 }
      ]
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: '59' },
        { name: 'Português', nota: '80' },
        { name: 'Química', nota: '78' },
        { name: 'Biologia', nota: '92' }
      ]
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '76' },
        { name: 'Português', nota: '90' },
        { name: 'Química', nota: '70' },
        { name: 'Biologia', nota: '80' }
      ]
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '91' },
        { name: 'Português', nota: '85' },
        { name: 'Química', nota: '92' },
        { name: 'Biologia', nota: '90' }
      ]
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '70' },
        { name: 'Português', nota: '70' },
        { name: 'Química', nota: '60' },
        { name: 'Biologia', nota: '50' }
      ]
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '80' },
        { name: 'Português', nota: '82' },
        { name: 'Química', nota: '79' },
        { name: 'Biologia', nota: '75' }
      ]
    },
  ]

  // Função para buscar e imprimir o nome completo de todos os estudantes que estudam no turno da manhã.
  const allNameStudents = estudantes.filter((students) => students.turno = 'Manhã').map((studantsMorning) => {
      return `${studantsMorning.nome} ${studantsMorning.sobrenome}`;
  })
//  console.log(allNameStudents)
  // Buscar um estudante pelo nome e retornar a situação dele em cada matéria:
  const reportStatus = (name, students) => {
    const estudanteFiltrado = students.find((estudante) => estudante.nome === name);
    return estudanteFiltrado.materias.map((materias) =>  (
        `${materias.name} --- Situação: ${(materias.nota >= 60) ? 'Aprovado' : 'Reprovado'}`)
    )
  }
// console.log(reportStatus('Natalia', estudantes));

// Transformar todos os números em negativos em um novo array
const numbers = [1, 2, 3, 4, -5];

const numbersNegative = numbers.map((number) => number < 0 ? number : number * (-1));
//console.log(numbersNegative);

// Unir os dois arrays em um array de objetos
const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

function unirArrays(listProducts, listPrices) {
  return listProducts.map((product, index) => (
        { [product]: listPrices[index] }
    ))
}


console.log(unirArrays(products, prices));