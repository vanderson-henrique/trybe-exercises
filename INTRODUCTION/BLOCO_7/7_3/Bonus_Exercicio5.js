const assert = require('assert');

const verify = (password) => {
    let result = false;
    if (password === null){
        result === null;

    } else if (password.length < 8){
        result = false;

    } else if (password >= 8) {
     for (let i = 0; i < password.length; i += 1) {
         if (!isNaN(password[i] * 1)) {

         } else {
             ((password[i]).toUpperCase() === password[i]) {
            result = true;
        }
    }
    }
    return result;
}




const result1 = verify('Trybe12'); // Testa menos de 8 caracteres
assert.strictEqual(result1, false);

//const result2 = verify(null); // Testa senha nula
//assert.strictEqual(result2, false);

const result3 = verify('trybe123'); // Testa a falta de letra maiúscula
assert.strictEqual(result3, false);

/*const result4 = verify('TRYBE123'); // Testa a falta de letra maiúscula
assert.strictEqual(result4, false);

const result5 = verify('TrybeVanderson'); // Testa a falta de número
assert.strictEqual(result5, false);*/

const result6 = verify('Trybe123'); // Testa se valida com informações corretas
assert.strictEqual(result6, true);

