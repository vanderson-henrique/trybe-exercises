// Esta será a tabela de junção entre Books e Users (N:N)
const createUserBooks = (sequelize, _DataTypes) => {
  const UserBooks = sequelize.define(
    'UserBooks',
    {},
    { timestamps: false },
  );

  UserBooks.associate = (models) => {
    models.Books.belongsToMany(models.Users, {
      as: 'users',
      through: UserBooks,
      foreignKey: 'book_id',
      otherKey: 'user_id',
    });
    models.Users.belongsToMany(models.Books, {
      as: 'books',
      through: UserBooks,
      foreignKey: 'user_id',
      otherKey: 'book_id',
    });
  };

  return UserBooks;
};

module.exports = createUserBooks;