const errors = {
  firstName_blank: 'O primeiro nome é obrigatório',
  firstName_not_string: 'O primeiro nome deve ser uma string',
  firstName_length: 'O primeiro nome deve pelo menos 3 caracteres',
  lastName_blank: 'O último nome é obrigatório',
  lastName_not_string: 'O último nome deve ser uma string',
  lastName_length: 'O último nome deve pelo menos 3 caracteres',
  middleName_not_string: 'O nome do meio deve ser uma string',
}

const blank = (value) => (!value);
const isNotString = (value) => (typeof value !== 'string');
const isLengthLetterThan = (value, min) => (value.length < min);

const isValid = (firstName, middleName, lastName) => {
  const code = 422;

  switch(true) {
    case blank(firstName): return { code, message: errors.firstName_blank }
    case isNotString(firstName): return { code, message: errors.firstName_not_string }
    case isLengthLetterThan(firstName, 3): return { code, message: errors.firstName_length }
    case blank(lastName): return { code, message: errors.lastName_blank }
    case isNotString(lastName): return { code, message: errors.lastName_not_string }
    case isLengthLetterThan(lastName, 3): return { code, message: errors.lastName_length }
    case (!blank(middleName) && isNotString(middleName)): return { code, message: errors.middleName_not_string }
    default: return {};
  }
};

module.exports = { isValid };
