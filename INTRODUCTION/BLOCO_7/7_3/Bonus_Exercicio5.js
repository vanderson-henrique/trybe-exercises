const assert = require('assert');

const verify = (password) => {
    if (password === null) return false;
    else if (password.length < 8) return false;
    else if (!/[A-Z]/.test(password)) return false; // Verifica se tem alguma letra maiúscula
    else if (!/[a-z]/.test(password)) return false; // Verifica se tem alguma letra minúscula
    else if (!/[1-9]/.test(password)) return false; // Verifica se tem pelo menos 1 número
    return true;
}

const result1 = verify('Trybe12'); // Testa menos de 8 caracteres
assert.strictEqual(result1, false);

const result2 = verify(null); // Testa senha nula
assert.strictEqual(result2, false);

const result3 = verify('trybe123'); // Testa a falta de letra maiúscula
assert.strictEqual(result3, false);

const result4 = verify('TRYBE123'); // Testa a falta de letra maiúscula
assert.strictEqual(result4, false);

const result5 = verify('TrybeVanderson'); // Testa a falta de número
assert.strictEqual(result5, false);

const result6 = verify('Trybe123'); // Testa se valida com informações corretas
assert.strictEqual(result6, true);

