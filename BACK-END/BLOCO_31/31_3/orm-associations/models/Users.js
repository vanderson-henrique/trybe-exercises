const createUsers = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    user_id: { type: DataTypes.INTEGER, primaryKey: true },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false,
  });

  return Users;
};

module.exports = createUsers;