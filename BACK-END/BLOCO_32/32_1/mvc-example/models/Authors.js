const createAuthors = (sequelize, DataTypes) => {
  const Authors = sequelize.define('Authors', {
    first_name: DataTypes.STRING,
    middle_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthday: DataTypes.DATE,
    nationality: DataTypes.STRING
  },
  {
    timestamps: false
  });
  return Authors;
}

module.exports = createAuthors;