const createBooks = (sequelize, DataTypes) => {
  const Books = sequelize.define('Books', {
    book_id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    release_year: DataTypes.INTEGER,
    number_pages: DataTypes.INTEGER,
  },
  {
    timestamps: false,
  });

  return Books;
};

module.exports = createBooks;