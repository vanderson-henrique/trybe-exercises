const createAddresses = (sequelize, DataTypes) => {
  const Addresses = sequelize.define('Addresses', {
    address_id: { type: DataTypes.INTEGER, primaryKey: true },
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    employee_id: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
  });
// Aqui diz que 1 endereço pertence a 1 empregado
  Addresses.associate = (models) => {
    Addresses.belongsTo(models.Employees,
      { foreignKey: 'employee_id', as: 'addresses' });
  };

  return Addresses;
};

module.exports = createAddresses;