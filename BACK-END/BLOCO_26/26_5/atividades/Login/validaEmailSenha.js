function validarEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validaSenha(senha) {
  if ( typeof senha !== 'number' || senha.toString().length < 4 || senha.toString().length > 8)
    return false;
  return true;
}

module.exports = validaEmailSenha = (req, res, next) => {
  const { email, senha } = req.body;
  if (validarEmail(email) && validaSenha(senha)) next();
  res.status(401).json({ error: "email or password is incorrect" });
};
