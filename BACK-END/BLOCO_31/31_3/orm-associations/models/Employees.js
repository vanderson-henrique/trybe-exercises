const createEmployee = (sequelize, DataTypes) => {
  const Employees = sequelize.define('Employees', {
    employee_id: { type: DataTypes.INTEGER, primaryKey: true },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false,
  });
// Aqui diz que 1 empregado tem 1 endereço (1:1)
  // Employees.associate = (models) => {
  //   Employees.hasOne(models.Addresses,
  //     { foreignKey: 'employee_id', as: 'addresses' });
  // }

// Aqui diz que 1 empregado possui muitos endereços (1:N)
  Employees.associate = (models) => {
    Employees.hasMany(models.Addresses,
      { foreignKey: 'employee_id', as: 'addresses' });
   };

  return Employees;
}

module.exports = createEmployee;