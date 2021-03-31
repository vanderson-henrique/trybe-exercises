const { isValid } = require('../schemas/authorSchema');

const createAuthorValidate = (req, res, next) => {
  const { first_name, middle_name, last_name } = req.body;
  const validate = isValid(first_name, middle_name, last_name);

  if (validate.message) return res.status(validate.code).json({ message: validate.message });

  next();
}

module.exports = createAuthorValidate;
