// Caso não encontre a propriedade nationality, use 'Brazilian'
const nationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`

const person = {
    firstName: "João",
    lastName: "Jr II"
}

const otherPerson = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
}

//console.log(nationality(otherPerson)) // Ivan is Russian
//console.log(nationality(person))

const hello = (name = 'World') => {
    console.log(`Hello ${name}`);
}

hello('Vanderson');
hello('sasasasa');