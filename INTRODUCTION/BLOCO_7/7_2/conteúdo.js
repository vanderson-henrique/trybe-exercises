// Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
const insereChave = (newObject, lastname, value) => {
    newObject = { };
    newObject[lastname] = value;
    return newObject;
}

console.log(insereChave('newObject', 'lastname', 'Faria'));

// Tente criar uma função que exiba as habilidades do objeto student. Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade". 

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

  const result = (student) => {
    const skills = Object.keys(student);
    for (index in skills){
        //console.log(`${skills[index]} ---- ${student[skills[index]]}`);
    }
  }

  //console.log('Estudante 1:');
  //console.log(result(student1));
  //console.log('Estudante 2:');
  //console.log(result(student2));

  // Parte III - Object.values

  const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
  };
  
  const listSkillsWithFor = (student) => {
    const skills = [];
    for(skill in student) {
      skills.push(student[skill]);
    }
  
    return skills;
  };
  
  const listSkillsWithValues = (student) => Object.values(student);
  
  // Sem Object.values
  //console.log(listSkillsWithFor(student));
  
  // Com Object.values
  //console.log(listSkillsWithValues(student));

  // Parte IV - object.entries

  const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  const pairKeyValue = Object.entries(países);
  //console.log(pairKeyValue);

  for(i in pairKeyValue) {
    //console.log('--------');
    //console.log(`Capital: ${pairKeyValue[i][1]}`);
    //console.log('País:', pairKeyValue[i][0]);
  };

  // Parte V - object.assign (cópia)

  const person = {
    name: 'Roberto',
    age: 25,
  };
  
  const lastName = {
    lastName: 'Silva',
    age: 27,
  };
  
  const clone = Object.assign(person, lastName);

  clone.name = 'Vanderson';
  person.lastName = 'Benedito';

  const newPerson = Object.assign({}, person);

  newPerson.name = 'Vanessa';
  newPerson.age = 38;
  clone.age = 30;

  //console.log(newPerson);
  //console.log(clone);
  //console.log(person); 

