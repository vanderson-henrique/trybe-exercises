const { isValid } = require('../schemas/booksSchema');

const createBookValidate = async (req, res, next) => {
  const { title, author_id } = req.body;
  const validate = await isValid(title, author_id);

  if (validate.message) return res.status(validate.code).json({ message: validate.message });

  next();
}

module.exports = createBookValidate;
