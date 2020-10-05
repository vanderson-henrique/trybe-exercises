const students = [
  { name: 'Maria', note: 70, approved: '' },
  { name: 'José', note: 56, approved: '' },
  { name: 'Roberto', note: 90, approved: '' },
  { name: 'Ana', note: 81, approved: '' }
];

students.forEach((student, position) => {
    if (student.note >= 60) {
        student.approved = `Aprovado na posição ${position}`;
      } else {
        student.approved = `Recuperação na posição ${position}`;
      }
});

// console.log(students);

const numbers = [301, 1, 21, 3, 41, 5, 61, 7, 81, 91, 1010];

const isEven = numbers.find(number => number % 2 === 0);
const nameStudant = students.find(name => name.name === 'José');
const maiorQue300 = numbers.some(number => number > 302);
const everyOdd = numbers.every(number => number % 2 !== 0);



//console.log(isEven);
//console.log(nameStudant);
//console.log(maiorQue300);
//console.log(everyOdd);

const items = [1, 3, 2, 45, 54, 33, 23, 234, 22];
// ordem crescente
items.sort((a,b) => a-b);
console.table(items);
// ordem decrescente
items.sort((a,b) => b-a);
console.table(items);