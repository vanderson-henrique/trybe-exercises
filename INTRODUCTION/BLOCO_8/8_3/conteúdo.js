const numbers1 = [1, 2, 4, 5, 6, 7, 8, 9, 99, 778];

const somaNumbers = () => {
   return numbers1.reduce((acumulador, valorArray) => acumulador + valorArray, 0);
    //return soma;
    }
//console.log(somaNumbers1());

const numbers2 = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 10 42 57 60 62 57 113
  return result + number;
  };
//const sumNumbers = numbers2.reduce(getSum, 100);
// console.log(sumNumbers); // 123

// Encontre o maior valor usando reduce
const numbers3 = [50, 85, -30, 30, 15];

const maiorValor = (highestValue, number) => {
    //console.log(highestValue);
    if (highestValue > number) {
        return highestValue;
    } else {
        return number;
    }
}
// console.log(numbers3.reduce(maiorValor));

// Função que some todos os números pares com filter e reduce:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const numerosPares = numbers.filter((number) => number % 2 === 0);
const somaNumerosPares = numerosPares.reduce((soma, number) => soma + number);

// console.log(somaNumerosPares);

// Função que some todos os números pares apenas com reduce:

const numbers4 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const somaNumeros = (soma, number) => {
    if (number % 2 === 0) {
        return soma + number;
    } else {
        return soma;
    }
}
// console.log(numbers4.reduce(somaNumeros, 0));

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

  /* Agora crie uma função usando os dados dos estudantes que usamos no conteúdo do dia anterior, para mostrar na tela um 
relatório que diz em qual matéria o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce!*/

const melhorMateria = (acc, materia) => {
    if (acc.nota > materia.nota) {
        return acc;   
    } else {
        return materia;
    }
}

const relatorio = estudantes.map((estudante) => {
    return {
        nome: estudante.nome,
        materia: estudante.materias.reduce(melhorMateria).name,
    }
})

console.log(relatorio);